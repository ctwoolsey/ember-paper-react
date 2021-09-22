import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from '../../react-component-lib/constants/constants';
import React from 'react';
import { scheduleOnce } from '@ember/runloop';
import { v4 as uuidv4 } from 'uuid';
import Icon from '@mui/material/Icon';
import Component from '@glimmer/component';
import ReactDOM from 'react-dom';

export default class BaseEmberPaperReact extends Component {
  @service themeManager;
  @service renderStack;

  constructor() {
    super(...arguments);
    this.reactElement = null;
    this.reactRef = null;
    this.el = null;

    this.componentType = COMPONENT_TYPES.NOT_SET;
    this.nameValue = null;
    this.childrenFragment = null;
    this.reactComponentFragments = null;
    this.lastChildId= uuidv4();
    this.childrenSpanId = uuidv4();
    this.fixedClassString = '';
    this.reactComponentFragments = {};
    this.stateProps = {};

  }

    get changeArgs() {
    let changeObj = {};
    let statefulProps = Object.assign({}, this.stateProps, this.notForComponentStateProps)
    for (let propName in statefulProps) {
      if (propName !== 'theme') {
        if (Object.prototype.hasOwnProperty.call(statefulProps, propName)) {
          changeObj[propName] = this.args[propName];
        }
      } else {
        changeObj[propName] = this.themeManager.theme;
      }
    }
    return changeObj;
  }

  @action
  changeReactState(stateName, value) {
    if (this.reactRef) {
      if (stateName === 'class') {
        value = this.mergeClassWithClassString();
      }
      value = (value === undefined) ? null : value;
      this.reactRef.current.setStateProp(stateName, value);
    }
  }

  createIcon(iconObj) {
    if (iconObj && iconObj.icon) {
      let props = iconObj.iconProps ? iconObj.iconProps : {};
      return React.createElement(iconObj.icon, props);
    } else if (iconObj && iconObj.iconProps) { //used for native FontAwesome for example
      return React.createElement(Icon, iconObj.iconProps);
    } else {
      return null;
    }
  }

  isEndElement(child) {
    return child.id === this.lastChildId;
  }

  setChildrenFragment() {
    /*
        Do not use this method to move children if the element children will be manipulated by Ember later.
        For example Any children that would be dynamic.  Through {{#if}} or {{#each}}
     */
    let child = this.el.nextSibling;
    if (this.reactRef.current.componentRef.current) {
      child = this.reactRef.current.componentRef.current.nextSibling;
    }

    this.childrenFragment = document.createDocumentFragment();
    while (child && !this.isEndElement(child)) {
      let currentElement = child;
      child = child.nextSibling;
      this.childrenFragment.appendChild(currentElement);
    }
  }

  findAndLoadReactAttributeChildren() {
    let child = this.el.nextSibling;
    if (this.reactRef.current.componentRef.current) {
      child = this.reactRef.current.componentRef.current.nextSibling;
    }

    while (child && !this.isEndElement(child)) {
      let currentElement = child;
      child = child.nextSibling;
      if (currentElement.className === REACT_ATTRIBUTE_COMPONENTS.CLASS_NAME) {
        child = this.findEndReactAttributeElement(currentElement).nextSibling;
        this.setReactAttributeChildrenFragment(currentElement);
      }
    }
  }

  findEndReactAttributeElement(attributeElement) {
    let endElement = attributeElement.nextElementSibling;
    while (endElement.id !== 'end_'+attributeElement.id) {
      endElement = endElement.nextElementSibling;
    }

    return endElement;
  }

  renderReactAttributeComponent(attributeName, className) {
    const reactComp = this.reactRef.current.componentRef.current;
    if (this.reactComponentFragments[attributeName]) {
      reactComp.getElementsByClassName(className)[0].replaceChildren(this.reactComponentFragments[attributeName]);
    } else {
      if (!this.args[attributeName]) {
        reactComp.getElementsByClassName(className)[0].remove();
      }
    }
  }

  setReactAttributeChildrenFragment(attributeElement) {
    let reactFragment = document.createDocumentFragment();
    let reactAttribute = attributeElement.id;
    let sibling = attributeElement.nextSibling;
    while (sibling.id !== 'end_'+reactAttribute) {
      let currentElement = sibling;
      sibling = sibling.nextSibling;
      reactFragment.appendChild(currentElement);
    }

    if (reactFragment.childNodes.length) {
      this.reactComponentFragments[attributeElement.id] = reactFragment;
    }
    attributeElement.remove();
    sibling.remove();
  }

  renderElement() {
    console.log('Rendering: ' + this.componentType);
    const reactElement = this.reactRef.current.componentRef.current;
    reactElement &&  this.el.insertAdjacentElement('afterend', reactElement);

    if (!this.renderChildren) {
      this.setChildrenFragment();
      if (this.childrenFragment.childNodes.length > 0) {
        this.reactRef.current.componentRef.current.replaceChildren(this.childrenFragment);
      }
    } else {
      this.renderChildren();
    }

    this.renderAdditionalItems && this.renderAdditionalItems();

    this.el.remove();

    if (this.doneRendering) {
      scheduleOnce('afterRender', this, this.doneRendering);
    }

    const childEndMarker = document.getElementById(this.lastChildId);
    childEndMarker && childEndMarker.remove();
    this.renderStack.renderNext();
  }



  removeChildren(element) {
    while (element.firstChild) {
      element.firstChild.remove();
    }
  }

  mergeClassWithClassString() {
    return this.args.class ? this.fixedClassString + ' ' + this.args.class : this.fixedClassString;
  }

  initializeAndMergeClassWithClassString() {
    [...this.el.attributes].forEach( attr => {
      if (attr.nodeName === 'class') {
        this.fixedClassString = attr.nodeValue;
      }
    });
    return this.mergeClassWithClassString();
  }

  findElementId() {
    let elementId = null;
    if (this.args.id) {
      elementId = this.args.id;
    } else {
      [...this.el.attributes].forEach(attr => {
        if (attr.nodeName === 'id') {
          elementId = attr.nodeValue;
          this.el.removeAttribute('id');
        }
      });
    }
    return elementId;
  }

  initializeProps() {
    Object.assign(this.props, this.notForComponentProps, this.notForComponentStateProps);
    for (let propName in this.props) {
      switch (propName) {
        case 'class':
          this.props.class = this.initializeAndMergeClassWithClassString() || '';
          break;
        case 'id':
          this.props.id = this.findElementId();
          break;
        case 'theme':
          this.props.theme = this.themeManager.theme || null;
          break;
        case 'ref':
          this.props.ref = this.reactRef;
          break;
        case 'label':
          this.props.label = this.args.label || '';
          break;
        default:
          if (this.args[propName] !== null && this.args[propName] !== undefined) {
            this.props[propName] = this.args[propName];
          }
          break;
      }
    }
  }

  checkIfCanRender() {
    if (this.renderStack.canStartRendering(this)) {
      this.renderStack.renderNext();
    }
  }

  insertedTasks(element) {
    this.el = element;
    this.reactRef = React.createRef();
    this.renderStack.addRenderCallback(this.renderElement, this);
    scheduleOnce('render', this, this.checkIfCanRender);

    this.initializeProps();
  }

  @action
  inserted(element) {
    console.log('Inserted: ' + this.componentType);
    this.insertedTasks(element);
    let ReactComponent = this.reactElement;

    const reactPortal = ReactDOM.createPortal(<ReactComponent {...this.props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

  willDestroy() {
    super.willDestroy();
  }

}

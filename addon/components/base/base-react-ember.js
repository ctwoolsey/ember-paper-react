import ReactDOM from 'react-dom';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from "../../react-component-lib/constants/constants";
import React from "react";
import { scheduleOnce } from "@ember/runloop";
import { v4 as uuidv4 } from 'uuid';
import BaseReactEmberActionsComponent from "./base-react-ember-actions";
import Icon from '@material-ui/core/Icon';


export default class BaseReactEmberComponent extends BaseReactEmberActionsComponent {
  @service themeManager;
  @service renderStack;

  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.el = null;
    this.handleClickChange = this.handleClickChange.bind(this);

    this.addedStyles = [];
    if (this.args.style) {
      this.addedStyles = this.args.style.split(';');
    }
    this.componentType = COMPONENT_TYPES.NOT_SET;
    this.handleName = false;
    this.nameValue = null;
    this.childrenFragment = null;
    this.reactComponentFragments = null;
    this.lastChildClassName = uuidv4();
    this.fixedClassString = '';

  }

  createIcon(icon, iconProps) {
    if (icon) {
      let props = iconProps ? iconProps : {};
      return React.createElement(icon, props);
    } else if (iconProps) { //used for native FontAwesome for example
      return React.createElement(Icon, iconProps);
    } else {
      return null;
    }
  }

  isEndElement(child) {
    if (!child.classList) {
      return false;
    } else {
      return child.classList.contains(this.lastChildClassName);
    }
  }

  setChildrenFragment() {
    let child = this.el.nextSibling;
    if (this.reactRef.current.componentRef.current) {
      child = this.reactRef.current.componentRef.current.nextSibling;
    }

    this.childrenFragment = document.createDocumentFragment();
    while (child && !this.isEndElement(child)) {
      let currentElement = child;
      child = child.nextSibling;
      if (currentElement.className === REACT_ATTRIBUTE_COMPONENTS.CLASS_NAME) {
        child = this.findEndReactAttributeElement(currentElement).nextSibling;
        this.setReactAttributeChildrenFragment(currentElement);
      } else {
        this.childrenFragment.appendChild(currentElement);
      }
    }
    child.remove();
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

  handleClickChange(event) {
    if (this.args.onClick) {
      return this.args.onClick();
    } else if (this.args.onChange) {
      return this.args.onChange(event.target.value);
    } else {
      return null;
    }
  }

  renderElement() {
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();


    this.setChildrenFragment();
    if (!this.renderChildren) {
      if (this.childrenFragment.childNodes.length > 0) {
        this.reactRef.current.componentRef.current.replaceChildren(this.childrenFragment);
      }
    }else {
      this.renderChildren();
    }

    this.renderReactAttributeComponents && this.renderReactAttributeComponents();

    this.el.remove();

    this.renderStack.renderNext();
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

  cloneAttributes(target, source) {
    [...source.attributes].forEach( attr => {
      if (attr.nodeName === 'style') {
        let styleArr = attr.nodeValue.split(';');
        styleArr.forEach(style => {
          let stylePieces = style.split(':');
          target.style[stylePieces[0]] = stylePieces[1];

        });
      } else if (attr.nodeName === 'name' && this.handleName) {
        this.nameValue = attr.nodeValue;
      } else if (attr.nodeName !== 'class' && attr.nodeName !== 'id'){
        target.setAttribute(attr.nodeName, attr.nodeValue)
      }
    });
  }

  initializeDynamicStyles() {
    this.addedStyles.forEach(styleItem => {
      let stylePieces = styleItem.split(':');
      this.reactRef.current.componentRef.current.style[stylePieces[0]] = stylePieces[1];
    });
  }

  checkIfCanRender() {
    if (this.renderStack.canStartRendering(this)) {
      this.renderStack.renderNext();
    }
  }

  @action
  inserted(element) {
    this.el = element;
    this.reactRef = React.createRef();
    this.renderStack.addRenderCallback(this.renderElement, this);
    scheduleOnce('render', this, this.checkIfCanRender);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

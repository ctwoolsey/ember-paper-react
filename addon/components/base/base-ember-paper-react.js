import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES } from '../../react-component-lib/constants/constants';
import React from 'react';
import { scheduleOnce } from '@ember/runloop';
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
    this.childrenFragment = null;
    this.fixedClassString = '';

    this.propsToPass = {};
  }

  loadPropObject(...propObjs) {
    this.props = {};
    this.stateProps = {};
    this.propsNotForComponent = {};
    this.statefulPropsNotForComponent = {};

    for (let propObj of propObjs) {
      Object.assign(this.props, propObj.props());
      Object.assign(this.stateProps, propObj.stateProps());
      Object.assign(this.propsNotForComponent, propObj.propsNotForComponent());
      Object.assign(this.statefulPropsNotForComponent, propObj.statefulPropsNotForComponent());
    }
  }

  get changeArgs() {
    let changeObj = {};
    let statefulProps = Object.assign({}, this.stateProps, this.statefulPropsNotForComponent)
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

  @action
  renderElement() {
    const reactElement = this.reactRef && this.reactRef.current.componentRef.current;
    reactElement &&  this.el.insertAdjacentElement('afterend', reactElement);

    this.renderElementItems();

    this.el.remove();
    this.renderStack.renderNext();
  }

  @action
  renderElementItems() {
    this.renderChildren && this.renderChildren();
    this.onRenderAdditionalItems && this.onRenderAdditionalItems();
    this.doneRendering && scheduleOnce('afterRender', this, this.doneRendering);
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
    Object.assign(this.propsToPass, this.props, this.stateProps, this.propsNotForComponent, this.statefulPropsNotForComponent);
    for (let propName in this.propsToPass) {
      switch (propName) {
        case 'class':
          this.propsToPass.class = this.initializeAndMergeClassWithClassString() || '';
          break;
        case 'id':
          this.propsToPass.id = this.findElementId();
          break;
        case 'theme':
          this.propsToPass.theme = this.themeManager.theme || null;
          break;
        case 'ref':
          this.propsToPass.ref = this.reactRef;
          break;
        case 'label':
          this.propsToPass.label = this.args.label || '';
          break;
        default:
          if (this.args[propName] !== null && this.args[propName] !== undefined) {
            this.propsToPass[propName] = this.args[propName];
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

  @action
  inserted(element) {
    this.el = element;
    this.reactRef = React.createRef();
    this.initializeProps();

    this.createReactComponent();
  }

  createReactComponent() {
    this.renderStack.addRenderCallback(this.renderElement, this);
    scheduleOnce('render', this, this.checkIfCanRender);
    const ReactComponent = this.reactElement;
    const reactPortal = ReactDOM.createPortal(<ReactComponent {...this.propsToPass}/>, this.el.parentNode);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }



}

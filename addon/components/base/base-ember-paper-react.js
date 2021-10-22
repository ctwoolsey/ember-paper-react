import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES } from '../../constants/constants';
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

    this.propsToPass = {};
    this.attributeObject = {
      fixedClassString: '',
      id: null,
      static: {
        aria: [],
        data: [],
        role: null
      },
      dynamic: {
        aria: [],
        data: [],
        role: null
      }
    };
    this.loadDynamicAriaAndData();
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
    this.includeAriaAndDataInChangeArgs(changeObj);
    return changeObj;
  }

  loadDynamicAriaAndData() {
    for(let propName in this.args) {
      if (propName.startsWith('aria-')){
        this.attributeObject.dynamic.aria.push({propName: propName, value:this.args[propName]});
      }
      if (propName.startsWith('data-')){
        this.attributeObject.dynamic.data.push({propName: propName, value:this.args[propName]});
      }
      if (propName === ('role')){
        this.attributeObject.dynamic.role = this.args.role;
      }
    }
  }

  includeAriaAndDataInChangeArgs(changeObj) {
    this.attributeObject.dynamic.aria.forEach((ariaObj) => {
      changeObj[ariaObj.propName] = this.args[ariaObj.propName];
    })

    this.attributeObject.dynamic.data.forEach((dataObj) => {
      changeObj[dataObj.propName] = this.args[dataObj.propName];
    })

    if (this.args.role) {
      changeObj.role = this.args.role;
    }
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
    this.doneRendering && scheduleOnce('afterRender', this, this.doneRendering);
  }

  mergeClassWithClassString() {
    return this.args.class ? this.attributeObject.fixedClassString + ' ' + this.args.class : this.attributeObject.fixedClassString;
  }

  grabAttributes() {
    [...this.el.attributes].forEach( attr => {
      if (attr.nodeName === 'class') {
        this.attributeObject.fixedClassString = attr.nodeValue;
      }
      if (attr.nodeName === 'id') {
        this.attributeObject.id = attr.nodeValue;
        this.el.removeAttribute('id');
      }
      if (attr.nodeName.startsWith('aria-')) {
        this.attributeObject.static.aria.push({propName: attr.nodeName, value:attr.nodeValue});
      }
      if (attr.nodeName.startsWith('data-')) {
        this.attributeObject.static.data.push({propName: attr.nodeName, value:attr.nodeValue});
      }
      if (attr.nodeName === 'role') {
        this.attributeObject.static.role = attr.nodeValue;
      }
    });
  }

  initializeProps() {
    this.grabAttributes();
    Object.assign(this.propsToPass, this.props, this.stateProps, this.propsNotForComponent, this.statefulPropsNotForComponent);
    for (let propName in this.propsToPass) {
      switch (propName) {
        case 'class':
          this.propsToPass.class = this.mergeClassWithClassString();
          break;
        case 'id':
          this.propsToPass.id = this.args.id || this.attributeObject.id;
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
    this.loadAriaAndDataAttributesIntoProps();
  }

  loadAriaAndDataAttributesIntoProps(){
    if (this.attributeObject.static.role || this.attributeObject.dynamic.role) {
      this.propsToPass.role = this.attributeObject.static.role || this.attributeObject.dynamic.role;
    }

    this.attributeObject.static.aria.forEach((ariaObj) => {
      this.propsToPass[ariaObj.propName] = ariaObj.value;
    })

    this.attributeObject.static.data.forEach((dataObj) => {
      this.propsToPass[dataObj.propName] = dataObj.value;
    })

    //dynamic aria & data are passed with the '@' symbol
    this.attributeObject.dynamic.aria.forEach((ariaObj) => {
      this.propsToPass[ariaObj.propName] = ariaObj.value;
    })

    this.attributeObject.dynamic.data.forEach((dataObj) => {
      this.propsToPass[dataObj.propName] = dataObj.value;
    })
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
    if (this.reactElement) {
      const ReactComponent = this.reactElement;
      const reactPortal = ReactDOM.createPortal(<ReactComponent {...this.propsToPass}/>, this.el.parentNode);
      ReactDOM.render(reactPortal, document.createElement('div'));
    }
  }

}

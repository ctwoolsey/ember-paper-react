import ReactDOM from 'react-dom';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES } from "../../react-component-lib/constants/constants";
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

  doesComponentHaveReactChildren() {
    let result = false;
    let child = this.el.nextElementSibling;
    while (child && !this.isEndElement(child) && !result) {
      let currentElement = child;
      child = child.nextElementSibling;
      result = this.isElementAnEmberPaperReactComponent(currentElement);
    }

    return result;
  }

  isElementAnEmberPaperReactComponent(element) {
    if (!element.classList) {
      return false;
    } else {
      for (let componentTypeKey in COMPONENT_TYPES) {
        if (element.classList.contains(COMPONENT_TYPES[componentTypeKey])) {
          return true;
        }
      }
      return false;
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
      this.childrenFragment.appendChild(currentElement);
    }
    child.remove();
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

  @action
  inserted(element) {
    this.el = element;
    this.reactRef = React.createRef();
    if (this.doesComponentHaveReactChildren()) {
      this.renderStack.addRenderCallback(this.renderElement, this);
    } else {
      scheduleOnce('render', this, this.renderElement);
    }
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

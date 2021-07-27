import Component from '@glimmer/component';
import ReactDOM from 'react-dom';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES } from "../../react-component-lib/constants/constants";
import React from "react";
import { scheduleOnce } from "@ember/runloop";
import { v4 as uuidv4 } from 'uuid';


/* Currently does not handle passing inputProps or use inputRef */

export default class BaseReactEmberComponent extends Component {
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

  @action
  class() {
    if (this.reactRef) {
      this.reactRef.current.setClass(this.args.class || false);
    }
  }

  @action
  sx() {
    if (this.reactRef) {
      this.reactRef.current.setSx(this.args.sx || null);
    }
  }

  @action
  style() {
    if (this.reactRef) {
      //remove old style names
      this.addedStyles.forEach(styleItem => {
        let stylePieces = styleItem.split(':');
        this.reactRef.current.componentRef.current.style.removeProperty(stylePieces[0]);
      });
      //save new style list
      this.addedStyles = this.args.style.split(';');
      this.addedStyles.forEach(styleItem => {
        let stylePieces = styleItem.split(':');
        this.reactRef.current.componentRef.current.style[stylePieces[0]] = stylePieces[1];
      });

    }
  }

  @action
  globalThemeChanged() {
    if (this.reactRef) {
      this.reactRef.current.setTheme(this.themeManager.theme);
    }
  }

  renderElement() {
    console.log(this.componentType + ' render');
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();


    this.setChildrenFragment();
    this.reactRef.current.componentRef.current.replaceChildren(this.childrenFragment);
    this.el.remove();

    this.renderStack.renderNext();
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
      } else if (attr.nodeName !== 'class') { //ignore class
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
    console.log('inserted ' + this.componentType);
    this.el = element;
    this.reactRef = React.createRef();
    if (this.doesComponentHaveReactChildren()) {
      this.renderStack.addRenderCallback(this.renderElement);
    } else {
      scheduleOnce('render', this, this.renderElement);
    }
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

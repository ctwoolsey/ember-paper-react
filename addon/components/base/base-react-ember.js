import Component from '@glimmer/component';
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { COMPONENT_TYPES } from "../../react-component-lib/constants/constants";


/* Currently does not handle passing inputProps or use inputRef */

export default class BaseReactEmberComponent extends Component {
  @service themeManager;

  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.el = null;
    this.handleClickChange = this.handleClickChange.bind(this);

    this.addedStyles = [];
    if (this.args.style) {
      this.addedStyles = this.args.style.split(';');
    }
    this.controlType = COMPONENT_TYPES.NOT_SET;
    this.handleName = false;
    this.nameValue = null;

  }

  handleClickChange(event) {
    console.log('click change');
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
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();
    this.el.remove();
  }

  fragmentFromBlockContent() {
    let fragment = document.createDocumentFragment();
    while (this.el.hasChildNodes()) {
      fragment.appendChild(this.el.firstChild);
    }

    return fragment;
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

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

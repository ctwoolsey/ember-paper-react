import Component from '@glimmer/component';
import { ReactCheckbox } from "../react-component-lib/react-checkbox";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class RPaperCheckbox extends Component {
  @service themeManager;

  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.controlRef = null;

    this.el = null;
    this.handleClick = this.handleClick.bind(this);

    this.addedStyles = [];
    if (this.args.style) {
      this.addedStyles = this.args.style.split(';');
    }
  }

  handleClick() {
    return (this.args.onClick && this.args.onClick()) || null;
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
  checked() {
    if (this.reactRef) {
      this.reactRef.current.setChecked(this.args.checked || null);
    }
  }

  @action
  color() {
    if (this.reactRef) {
      this.reactRef.current.setColor(this.args.color || null);
    }
  }

  @action
  disabled() {
    if (this.reactRef) {
      this.reactRef.current.setDisabled(this.args.disabled || null);
    }
  }

  @action
  disableRipple() {
    if (this.reactRef) {
      this.reactRef.current.setDisableRipple(this.args.disableRipple || null);
    }
  }

  @action
  indeterminate() {
    if (this.reactRef) {
      this.reactRef.current.setIndeterminate(this.args.indeterminate || null);
    }
  }

  @action
  label() {
    if (this.reactRef) {
      this.reactRef.current.setLabel(this.args.label || null);
    }
  }

  @action
  labelPlacement() {
    if (this.reactRef) {
      this.reactRef.current.setLabelPlacement(this.args.labelPlacement || null);
    }
  }

  @action
  required() {
    if (this.reactRef) {
      this.reactRef.current.setRequired(this.args.required || null);
    }
  }

  @action
  size() {
    if (this.reactRef) {
      this.reactRef.current.setSize(this.args.size || null);
    }
  }

  @action
  value() {
    if (this.reactRef) {
      this.reactRef.current.setValue(this.args.value || '');
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

  cloneAttributes(target, source) {
    [...source.attributes].forEach( attr => {
      if (attr.nodeName === 'style') {
        let styleArr = attr.nodeValue.split(';');
        styleArr.forEach(style => {
          let stylePieces = style.split(':');
          target.style[stylePieces[0]] = stylePieces[1];

        });
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
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    this.reactRef = React.createRef();
    this.controlRef = React.createRef();

    /* What is childRef vs controlRef, etc... */

    let props = {
      checked: this.args.checked || false,
      classString: this.args.class || '',
      color: this.args.color || null,
      disabled: this.args.disabled || false,
      disableRipple: this.args.disableRipple || null,
      indeterminate: this.args.indeterminate || false,
      label: this.args.label || null,
      labelPlacement: this.args.labelPlacement || 'end',
      size: this.args.size || null,
      theme: this.themeManager.theme || null,
      value: this.args.value || '',
      controlRef: this.controlRef,
      //childRef: this.reactRef,
      ref: this.reactRef,
      onChange: this.handleClick
    };

    const reactPortal = ReactDOM.createPortal(<ReactCheckbox {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

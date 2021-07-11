import Component from '@glimmer/component';
import { ReactCheckbox } from "../react-component-lib/react-checkbox";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { ReactFormControlLabel } from "../react-component-lib/react-form-control-label";
import { ReactThemeProvider } from "../react-component-lib/ReactConditionalThemeProvider";

export default class RPaperCheckbox extends Component {
  @service themeManager;

  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.inputReactRef = null;

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
    if (this.args.label) {
      if (this.inputReactRef) {
        this.inputReactRef.current.setColor(this.args.color || null);
      }
    } else {
      if (this.reactRef) {
        this.reactRef.current.setColor(this.args.color || null);
      }
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
    if (this.args.label) {
      if (this.inputReactRef) {
        this.inputReactRef.current.setDisableRipple(this.args.disableRipple || null);
      }
    } else {
      if (this.reactRef) {
        this.reactRef.current.setDisableRipple(this.args.disableRipple || null);
      }
    }
  }

  @action
  indeterminate() {
    if (this.args.label) {
      if (this.inputReactRef) {
        this.inputReactRef.current.setIndeterminate(this.args.indeterminate || null);
      }
    } else {
      if (this.reactRef) {
        this.reactRef.current.setIndeterminate(this.args.indeterminate || null);
      }
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
    if (this.args.label) {
      if (this.inputReactRef) {
        this.inputReactRef.current.setRequired(this.args.required || null);
      }
    } else {
      if (this.reactRef) {
        this.reactRef.current.setRequired(this.args.required || null);
      }
    }
  }

  @action
  size() {
    if (this.args.label) {
      if (this.inputReactRef) {
        this.inputReactRef.current.setSize(this.args.size || null);
      }
    } else {
      if (this.reactRef) {
        this.reactRef.current.setSize(this.args.size || null);
      }
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

    //where should items be cloned and placed. ?on input or on label etc.
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
    this.inputReactRef = React.createRef();

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
      size: this.args.size || '',
      theme: this.themeManager.theme || null,
      value: this.args.value || null,
      controlRef: this.inputReactRef,
      //childRef: this.reactRef,
      ref: this.reactRef,
      onChange: this.handleClick
    };

    /*
      React attaches events to the parent container, so by creating a portal and then rendering,
      the element is not placed into this r-paper-button, but at the end of the parent of r-paper-button.
      For inspiration:
      https://stackoverflow.com/questions/30686796/react-render-replace-container-instead-of-inserting-into/58385910#58385910

      once rendered, the runloop will call renderElement() for further processing.

     */

    let reactPortal = null;
    if (this.args.label) {
      const LabeledCheckBox = ReactFormControlLabel(ReactCheckbox);
      reactPortal = ReactDOM.createPortal(<LabeledCheckBox
        {...props}
      />, element.parentElement);
    } else {
      reactPortal = ReactDOM.createPortal(<ReactCheckbox
        {...props}
      />, element.parentElement);
    }

    /*let reactPortal = null;
    if (this.args.label) {
      const LabeledCheckBox = ReactFormControlLabel(ReactCheckbox);
      const ThemedLabeledCheckBox = ReactThemeProvider(LabeledCheckBox);
      reactPortal = ReactDOM.createPortal(<ThemedLabeledCheckBox
        {...props}
      />, element.parentElement);
    } else {
      const ThemedCheckBox = ReactThemeProvider(ReactCheckbox);
      reactPortal = ReactDOM.createPortal(<ThemedCheckBox
        {...props}
      />, element.parentElement);
    }*/

    ReactDOM.render(reactPortal, document.createElement('div'));

  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

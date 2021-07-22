import { ReactCheckbox } from "../../react-component-lib/react-checkbox";
import { ReactRadio } from "../../react-component-lib/react-radio";
import { ReactSwitch } from "../../react-component-lib/react-switch";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base-react-ember";


/* Currently does not handle passing inputProps or use inputRef */

export default class BaseLabeledCheckRadioSwitchComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
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
  edge() {
    if (this.reactRef) {
      this.reactRef.current.setEdge(this.args.edge || false);
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
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    this.reactRef = React.createRef();

    let props = {
      checked: this.args.checked || false,
      classString: this.args.class || '',
      color: this.args.color || null,
      disabled: this.args.disabled || false,
      disableRipple: this.args.disableRipple || null,
      edge: this.args.edge || false, //used by switch
      indeterminate: this.args.indeterminate || false, //used by checkbox
      label: this.args.label || null,
      labelPlacement: this.args.labelPlacement || 'end',
      name: this.args.radioName || this.nameValue,  //used by radio
      size: this.args.size || null,
      sx: this.args.size || null,
      theme: this.themeManager.theme || null,
      value: this.args.value || '',
      ref: this.reactRef,
      onChange: this.handleClickChange
    };

    let ControlComponent;
    switch(this.controlType) {
      case COMPONENT_TYPES.CHECKBOX:
        ControlComponent = ReactCheckbox;
        delete props.edge;
        break;
      case COMPONENT_TYPES.RADIO:
        ControlComponent = ReactRadio;
        delete props.edge;
        delete props.indeterminate;
        break;
      case COMPONENT_TYPES.SWITCH:
        ControlComponent = ReactSwitch;
        delete props.indeterminate;
        break;
    }
    const reactPortal = ReactDOM.createPortal(<ControlComponent {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}

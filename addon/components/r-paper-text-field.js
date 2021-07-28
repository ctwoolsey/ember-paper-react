import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactTextField } from "../react-component-lib/react-text-field";
import Inputmask from "inputmask";

export default class RPaperTextFieldComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TEXTFIELD;
    this.handleName = true;
    this.inputmask = null;
    if (this.args.mask) {
      this.handleClickChange = this.handleChange.bind(this);
    }

    if (this.args.mask) {
      if (this.args.maskDefaults) {
        Inputmask.extendDefaults(this.args.maskDefaults);
      }
      if (this.args.maskDefinitions) {
        Inputmask.extendDefinitions(this.args.maskDefinitions);
      }
      if (this.args.maskAlias) {
        Inputmask.extendAliases(this.args.maskAliases);
      }
    }

  }

  renderChildren() {
    if (this.args.select && this.childrenFragment.childNodes.length > 0) {
      this.reactRef.current.componentRef.current.getElementsByClassName('MuiNativeSelect-select')[0].replaceChildren(this.childrenFragment);
    }
  }

  renderElement() {
    if (this.args.mask) {
      this.inputmask = Inputmask(this.args.mask).mask(this.inputRef.current);
    }

    super.renderElement();
  }

  handleChange(event) {
    if (this.args.onChange && this.args.mask) {
      //if there is a mask return the unmasked value first, and the masked value second.
      return this.args.onChange(this.inputmask.unmaskedvalue(), event.target.value );
    } else {
      return null;
    }
  }

  @action
  inserted(element) {
    super.inserted(element);

    this.inputRef = React.createRef();

    let props = {
      autoComplete: this.args.autoComplete || null,
      autoFocus: this.args.autoFocus || null,
      classString: this.args.class || '',
      color: this.args.color || null,
      defaultValue: this.args.defaultValue || null,
      disabled: this.args.disabled || false,
      formHelperTextProps: this.args.formHelperTextProps || null,
      fullWidth: this.args.fullWidth || false,
      helperText: this.args.helperText || null,
      inputId: this.args.inputId || null,
      inputLabelProps: this.args.inputLabelProps || null,
      inputAttributes: this.args.inputAttributes || null,
      inputProps: this.args.inputProps || null,
      label: this.args.label || null,
      margin: this.args.margin || null,
      maxRows: this.args.maxRows || null,
      minRows: this.args.minRows || null,
      multiline: this.args.multiline || null,
      inputName: this.args.inputName || this.nameValue,
      placeholder: this.args.placeholder || null,
      required: this.args.required || null,
      rows: this.args.rows || null,
      select: this.args.select || null,
      selectProps: this.args.selectProps ||  {},
      size: this.args.size || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      type: this.args.type || null,
      value: this.args.value || null,
      variant: this.args.variant || null,
      ref: this.reactRef,
      inputRef: this.inputRef,
      onChange: this.handleClickChange
    };

    //Currently when there is a select, only native mode is supported.
    if (this.args.select) {
      props.selectProps.native = true;
    }

    const reactPortal = ReactDOM.createPortal(<ReactTextField {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}


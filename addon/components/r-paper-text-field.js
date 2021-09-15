/*import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";*/
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import { ReactTextField } from "../react-component-lib/react-text-field";
import Inputmask from "inputmask";
import { tracked } from '@glimmer/tracking';
import BaseEmberPaperReact from "./base/base-ember-paper-react";
import {
  TextFieldProps,
  TextFieldStateProps,
  TextFieldPropsNotForComponent
} from "../react-component-lib/utility/props/text-field-props";
import { once, scheduleOnce } from "@ember/runloop";

export default class RPaperTextFieldComponent extends BaseEmberPaperReact {
  @tracked canRenderChildren = false;

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TEXTFIELD;
    this.props = TextFieldProps();
    this.stateProps = TextFieldStateProps();
    this.notForComponentProps = TextFieldPropsNotForComponent();
    this.reactElement = ReactTextField;

    this.handleName = true;
    this.inputmask = null;
    //this.onChangeHandler = this.onChangeHandler.bind(this);
    /*if (this.args.mask) {
      this.handleClickChange = this.handleChange.bind(this);
    }*/

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
    this.moveChildren = this.moveChildren.bind(this);

  }

  overrideProps() {
    if (this.args.onChange && this.args.mask) {
      this.props.onChange = (event) => {
        return this.args.onChange(event, this.inputmask.unmaskedvalue());
      }
    }

    if (this.args.select) {
      if (!this.props.SelectProps) {
        this.props.SelectProps = {};
      }
      this.props.SelectProps.native = true;
    }
  }

  renderChildren() {
    //leave blank as children are handled in the local render element
  }

  renderElement() {
    if (this.args.mask) {
      this.inputmask = Inputmask(this.args.mask).mask(this.inputRef.current);
    }

    if (this.args.select) {
      this.dropDownLocation = this.reactRef.current.componentRef.current.getElementsByClassName('MuiNativeSelect-select')[0];
      once(this, this.moveChildren);
    }

    scheduleOnce('afterRender', this, this.continueRendering);
  }

  continueRendering() {
    super.renderElement();
  }

  moveChildren() {
    this.canRenderChildren = true;
  }

  /*onChangeHandler(event) {
    if (this.args.onChange && this.args.mask) {
      return this.args.onChange(event, this.inputmask.unmaskedvalue());
    } else {
      return null;
    }
  }*/

 /* @action
  inserted(element) {
    super.inserted(element);

    this.inputRef = React.createRef();

    let props = {
      autoComplete: this.args.autoComplete || null,
      autoFocus: this.args.autoFocus || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
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
      onChange: this.handleClickChange,
      id: this.findElementId()
    };

    //Currently when there is a select, only native mode is supported.
    if (this.args.select) {
      props.selectProps.native = true;
    }

    const reactPortal = ReactDOM.createPortal(<ReactTextField {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }*/
}


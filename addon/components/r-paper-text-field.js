import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactTextField } from '../react-component-lib/react-text-field';
import Inputmask from 'inputmask';
import {
  TextFieldProps,
  TextFieldStateProps,
  TextFieldPropsNotForComponent,
  TextFieldStatePropsNotForComponent
} from '../react-component-lib/utility/props/text-field-props';
import React from 'react';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperTextFieldComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TEXTFIELD;
    this.props = TextFieldProps();
    this.stateProps = TextFieldStateProps();
    this.notForComponentProps = TextFieldPropsNotForComponent();
    this.notForComponentStateProps = TextFieldStatePropsNotForComponent();
    this.reactElement = ReactTextField;

    this.inputmask = null;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.inputRef = React.createRef();

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

  initializeProps() {
    super.initializeProps();
    if (this.args.onChange) {
      this.props.onChange = this.onChangeHandler;
    }

    if (this.args.value === '') {
      this.props.value = '';
    }

    if (this.args.select) {
      if (!this.props.SelectProps) {
        this.props.SelectProps = {};
      }
      this.props.SelectProps.native = true;
    }
    this.props.inputRef = this.inputRef;
  }

  renderElement() {
    if (this.args.mask) {
      this.inputmask = Inputmask(this.args.mask).mask(this.inputRef.current);
    }

    if (this.args.select) {
      this.moveLocation = this.reactRef.current.componentRef.current.getElementsByClassName('MuiNativeSelect-select')[0];
    }

    super.renderElement();
  }

  onChangeHandler(event) {
    if (this.args.onChange && this.args.mask) {
      return this.args.onChange(event, this.inputmask.unmaskedvalue());
    } else {
      if (this.args.onChange) {
        return this.args.onChange(event);
      } else {
        return null;
      }
    }
  }

}


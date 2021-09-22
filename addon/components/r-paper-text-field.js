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
import { useInputMask }  from '../decorators/use-input-mask'

@useInputMask
export default class RPaperTextFieldComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TEXTFIELD;
    this.props = TextFieldProps();
    this.stateProps = TextFieldStateProps();
    this.notForComponentProps = TextFieldPropsNotForComponent();
    this.notForComponentStateProps = TextFieldStatePropsNotForComponent();
    this.reactElement = ReactTextField;
  }

  initializeProps() {
    super.initializeProps();

    if (this.args.value === '') {
      this.props.value = '';
    }

    if (this.args.select) {
      if (!this.props.SelectProps) {
        this.props.SelectProps = {};
      }
      this.props.SelectProps.native = true;
    }
  }

  renderElement() {
    if (this.args.select) {
      this.moveLocation = this.reactRef.current.componentRef.current.getElementsByClassName('MuiNativeSelect-select')[0];
    }

    super.renderElement();
  }

}


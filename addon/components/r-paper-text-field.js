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
import React from "react";

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
    this.moveChildren = this.moveChildren.bind(this);

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


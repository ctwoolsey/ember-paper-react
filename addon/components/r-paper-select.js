import { ReactSelect } from '../react-component-lib/react-select'
import { SELECT } from '../constants/select';
import { SelectPropObj } from '../prop-files/select-props';
import { action } from '@ember/object';
import React from "react";
import { reactGroup } from "../decorators/react-group";
import BaseEmberPaperReact from "./base/base-ember-paper-react";

@reactGroup
export default class RPaperSelectComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = SELECT.COMPONENT_TYPE;
    this.inputRef = React.createRef();
    this.loadPropObject(SelectPropObj);
    this.reactElement = ReactSelect;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.inputRef = this.inputRef;
    this.propsToPass.onChange = this.onChangeHandler;
  }

  @action
  onChangeHandler(evt, child) {
    this.args.onChange && this.args.onChange(evt, child);
    const textHolder = this.reactRef.current.componentRef.current.querySelector(`.${SELECT.SELECT_TEXT_LOCATION_CLASS_NAME}`);
    textHolder.innerHTML = child.ref.current.componentRef.current.innerHTML;
  }
  renderChildren() {
    //left blank
  }
}


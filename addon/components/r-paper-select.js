import { ReactSelect } from '../react-component-lib/react-select'
import { SELECT } from '../constants/select';
import { SelectPropObj } from '../prop-files/select-props';
import { FormControlPropObj } from "../prop-files/form-control-props";
import { InputLabelPropObj } from "../prop-files/input-label-props";
import { action } from '@ember/object';
import React from "react";
import { reactGroup } from "../decorators/react-group";
import BaseEmberPaperReact from "./base/base-ember-paper-react";
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";
import { inject as service } from '@ember/service';

@reactGroup
@hasAttributeNodeChildren
export default class RPaperSelectComponent extends BaseEmberPaperReact {
  @service reactGroupList;
  constructor() {
    super(...arguments);
    this.componentType = SELECT.COMPONENT_TYPE;
    this.inputRef = React.createRef();
    this.loadPropObject(SelectPropObj, InputLabelPropObj, FormControlPropObj);
    this.reactElement = ReactSelect;
  }

  createGroupList() {
    this.reactGroupList.create(this.groupIdentifier);
  }

  get renderValue() {
    return SELECT.ATTRIBUTE_COMPONENT.RENDER_VALUE;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.inputRef = this.inputRef;
    this.propsToPass.onChange = this.onChangeHandler;
    this.propsToPass.onOpen = this.onOpenHandler;
    this.propsToPass.onClose = this.onCloseHandler;
  }

  @action
  onChangeHandler(evt, child) {
    this.args.onChange && this.args.onChange(evt, child);
    this.placeTextInSelect(evt.target.value, child);
  }

  @action
  onOpenHandler(evt) {
    this.args.onOpen && this.args.onOpen(evt);
    this.reactRef.current.componentRef.current.classList.remove(SELECT.SHOW_EMPTY_CONTENT_CLASS);
  }

  @action
  onCloseHandler(evt) {
    this.args.onClose && this.args.onClose(evt);
    const value = evt.target.value;
    if (this.args.displayEmpty && (value === undefined || value === '')) {
      this.reactRef.current.componentRef.current.classList.add(SELECT.SHOW_EMPTY_CONTENT_CLASS);
    }
  }

  onRenderAttributeNodeChildren() {
    this.placeTextInSelect(this.args.value);
  }

  copyFragment(fragment) {
    const copied = document.createElement('span');
    Array.from(fragment.childNodes).forEach((childNode) => {
      copied.appendChild(childNode.cloneNode(true));
    })
    return copied;
  }

  placeTextInSelect(value, child) {
    const moveMethod = this.getAttributeMoveMethod(SELECT.ATTRIBUTE_COMPONENT.RENDER_VALUE);
    this.textHolder = this.reactRef.current.componentRef.current.querySelector(`.${SELECT.SELECT_TEXT_LOCATION_CLASS_NAME}`);
    if (moveMethod) {
      if (value === undefined || value === '') {
        if (this.args.displayEmpty) {
          moveMethod(this.textHolder);
          this.reactRef.current.componentRef.current.classList.add(SELECT.SHOW_EMPTY_CONTENT_CLASS);
          //display normal
        } else {
          //display blank
          this.textHolder.innerHTML = '';
        }
      } else {
        //display normal
        moveMethod(this.textHolder);
      }
    } else {
      if (child) {
        if (value === undefined || value === '') {
          if (this.args.displayEmpty) {
            this.textHolder.innerHTML = child.ref.current.componentRef.current.innerHTML;
            //display normal
          } else {
            //display blank
            this.textHolder.innerHTML = '';
          }
        } else {
          //display normal
          this.textHolder.innerHTML = child.ref.current.componentRef.current.innerHTML;
        }
      } else {
        // only used in initialization
        const contentToDisplay = this.reactGroupList.load(this.groupIdentifier, value);
        const copiedContent = this.copyFragment(contentToDisplay.node);
        if (value === undefined || value === '') {
          if (this.args.displayEmpty) {
            this.textHolder.innerHTML = copiedContent.innerHTML;
            this.reactRef.current.componentRef.current.classList.add(SELECT.SHOW_EMPTY_CONTENT_CLASS);
          } else {
            //display blank
            this.textHolder.innerHTML = '';
          }
        } else {
          this.textHolder.innerHTML = copiedContent.innerHTML;
        }
      }
    }
  }
}

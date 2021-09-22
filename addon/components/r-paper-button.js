import {ReactButton} from '../react-component-lib/react-button'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { ButtonPropObj } from '../react-component-lib/utility/props/button-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperButton extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BUTTON;
    this.loadPropObject(ButtonPropObj);
    this.reactElement = ReactButton;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.endIcon = this.createIcon(this.args.endIcon);
    this.propsToPass.startIcon = this.createIcon(this.args.startIcon);
  }

  renderChildren() {
    const reactElement = this.reactRef.current.componentRef.current;
    const buttonContentSpan = document.createElement('span');
    buttonContentSpan.className = 'ember-paper-button-content';
    if (this.args.startIcon || this.args.endIcon) {
      if (this.args.startIcon) {
        const startIconSpan = reactElement.getElementsByClassName('MuiButton-startIcon')[0];
        startIconSpan.parentNode.insertBefore(buttonContentSpan, startIconSpan.nextSibling);
      } else {
        const endIconSpan = reactElement.getElementsByClassName('MuiButton-endIcon')[0];
        endIconSpan.parentNode.insertBefore(buttonContentSpan, endIconSpan);
      }
    } else {
      reactElement.appendChild(buttonContentSpan);
    }
    this.moveLocation = buttonContentSpan;
  }

  /*renderChildren() {
    this.setChildrenFragment();
    if (this.childrenFragment.childNodes.length > 0) {
      const reactElement = this.reactRef.current.componentRef.current;
      if (this.args.startIcon || this.args.endIcon) {
        if (this.args.startIcon) {
          const startIconSpan = reactElement.getElementsByClassName('MuiButton-startIcon')[0];
          startIconSpan.parentNode.insertBefore(this.childrenFragment, startIconSpan.nextSibling);
        } else {
          const endIconSpan = reactElement.getElementsByClassName('MuiButton-endIcon')[0];
          endIconSpan.parentNode.insertBefore(this.childrenFragment, endIconSpan);
        }
      } else {
        reactElement.replaceChildren(this.childrenFragment);
      }
    }
  }*/
}

import {ReactButton} from '../react-component-lib/react-button'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ButtonPropObj } from '../react-component-lib/utility/props/button-props';
import BaseInElementRender from "./base/base-in-element-render";
import { reactPresentationCapable } from "../decorators/react-presentation-capable";

@reactPresentationCapable
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
    this.reactRender(this.reactRef.current.componentRef.current);
  }

  reactRender(insertElement) {
    const buttonContentSpan = document.createElement('span');
    buttonContentSpan.className = 'ember-paper-button-content';
    if (this.args.startIcon || this.args.endIcon) {
      if (this.args.startIcon) {
        const startIconSpan = insertElement.getElementsByClassName('MuiButton-startIcon')[0];
        startIconSpan.parentNode.insertBefore(buttonContentSpan, startIconSpan.nextSibling);
      } else {
        const endIconSpan = insertElement.getElementsByClassName('MuiButton-endIcon')[0];
        endIconSpan.parentNode.insertBefore(buttonContentSpan, endIconSpan);
      }
    } else {
      insertElement.appendChild(buttonContentSpan);
    }
    this.moveLocation = buttonContentSpan;
  }
}

import {ReactButton} from '../react-component-lib/react-button'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ButtonPropObj } from '../prop-files/button-props';
import BaseInElementRender from "./base/base-in-element-render";
import { protectChildrenFromReactDestruction } from "../decorators/protect-children-from-react-destruction";
import { overrideHref } from "../decorators/override-href";

@protectChildrenFromReactDestruction
@overrideHref
export default class RPaperButton extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BUTTON;
    this.loadPropObject(ButtonPropObj);
    this.reactElement = ReactButton;
  }

  renderChildren() {
    //intentionally left blank
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

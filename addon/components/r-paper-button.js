import {ReactButton} from '../react-component-lib/react-button'
import { COMPONENT_TYPES } from '../constants/constants';
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
    const buttonContentSpan = insertElement.getElementsByClassName('children-holder')[0];
    buttonContentSpan.className += ' ember-paper-button-content';
    this.moveLocation = buttonContentSpan;
  }
}

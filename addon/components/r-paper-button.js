import {ReactButton} from '../react-component-lib/react-button'
import { BUTTON } from "../constants/button";
import { ButtonPropObj } from '../prop-files/button-props';
import BaseInElementRender from "./base/base-in-element-render";
import { protectChildrenFromReactDestruction } from "../decorators/protect-children-from-react-destruction";
import { overrideHref } from "../decorators/override-href";

@protectChildrenFromReactDestruction
@overrideHref
export default class RPaperButton extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = BUTTON.COMPONENT_TYPE;
    this.loadPropObject(ButtonPropObj);
    this.reactElement = ReactButton;
  }

  renderChildren() {
    //intentionally left blank
  }

  reactRender(insertElement) {
    const buttonContentSpan = insertElement.getElementsByClassName(BUTTON.INSERT_CLASS)[0];
    buttonContentSpan.className += ` ${BUTTON.CONTENT_SPAN_CLASS_NAME}`;
    this.moveLocation = buttonContentSpan;
  }
}

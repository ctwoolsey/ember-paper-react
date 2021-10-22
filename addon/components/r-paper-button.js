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
}

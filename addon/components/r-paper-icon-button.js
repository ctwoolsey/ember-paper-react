import {ReactIconButton} from '../react-component-lib/react-icon-button'
import { COMPONENT_TYPES } from '../constants/constants';
import {IconButtonPropObj} from '../prop-files/icon-button-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperIconButtonComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.ICON_BUTTON;
    this.loadPropObject(IconButtonPropObj);
    this.reactElement = ReactIconButton;
  }

  /*renderChildren() {
    this.moveLocation = this.reactRef.current.componentRef.current.firstElementChild;
  }*/
}


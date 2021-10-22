import {ReactIconButton} from '../react-component-lib/react-icon-button'
import { ICON_BUTTON } from "../constants/icon-button";
import {IconButtonPropObj} from '../prop-files/icon-button-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperIconButtonComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = ICON_BUTTON.COMPONENT_TYPE;
    this.loadPropObject(IconButtonPropObj);
    this.reactElement = ReactIconButton;
  }
}


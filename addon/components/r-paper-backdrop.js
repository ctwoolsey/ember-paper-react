import { COMPONENT_TYPES } from '../constants/constants';
import { ReactBackdrop } from '../react-component-lib/react-backdrop';
import { BackdropPropObj } from '../prop-files/backdrop-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperBackdropComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BACKDROP;
    this.loadPropObject(BackdropPropObj);
    this.reactElement = ReactBackdrop;
  }
}








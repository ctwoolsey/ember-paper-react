import { BACKDROP } from "../constants/backdrop";
import { ReactBackdrop } from '../react-component-lib/react-backdrop';
import { BackdropPropObj } from '../prop-files/backdrop-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperBackdropComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = BACKDROP.COMPONENT_TYPE;
    this.loadPropObject(BackdropPropObj);
    this.reactElement = ReactBackdrop;
  }
}








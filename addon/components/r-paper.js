import { COMPONENT_TYPES } from '../constants/constants';
import { PaperPropObj } from '../prop-files/paper-props';
import { ReactPaper } from '../react-component-lib/react-paper';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.PAPER;
    this.loadPropObject(PaperPropObj);
    this.reactElement = ReactPaper;
  }
}

import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { PaperPropObj } from '../react-component-lib/utility/props/paper-props';
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

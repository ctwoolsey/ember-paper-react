import { COMPONENT_TYPES } from '../constants/constants';
import { ReactTooltip } from '../react-component-lib/react-tooltip';
import { TooltipPropObj } from '../prop-files/tooltip-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperTooltipComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TOOLTIP;
    this.loadPropObject(TooltipPropObj);
    this.reactElement = ReactTooltip;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.class += ' tooltip-cursor-pointer-enabled';
  }

}




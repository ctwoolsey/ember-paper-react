import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactTooltip } from '../react-component-lib/react-tooltip';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  TooltipProps,
  TooltipStateProps,
  TooltipPropsNotForComponent,
  TooltipStatePropsNotForComponent
} from '../react-component-lib/utility/props/tooltip-props';

export default class RPaperTooltipComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TOOLTIP;
    this.props = TooltipProps();
    this.stateProps = TooltipStateProps();
    this.notForComponentProps = TooltipPropsNotForComponent();
    this.notForComponentStateProps = TooltipStatePropsNotForComponent();
    this.reactElement = ReactTooltip;
  }

  initializeProps() {
    super.initializeProps();
    this.props.class += ' tooltip-cursor-pointer-enabled';
  }

  renderChildren() {
    this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
  }
}




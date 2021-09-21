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
    this.useButton = (this.args.useButton !== false);

  }

  initializeProps() {
    super.initializeProps();
    if (this.args.useButton === false) {
      this.props.class += ' tooltip-no-button';
    }
  }

  /*renderChildren() {
    this.setChildrenFragment();
    if (this.childrenFragment.childNodes.length > 0) {
      if (this.args.useButton === false) {
        this.reactRef.current.componentRef.current.replaceChildren(this.childrenFragment);
      } else {
        this.reactRef.current.componentRef.current.childNodes[0].childNodes[0].remove();
        this.reactRef.current.componentRef.current.childNodes[0].prepend(this.childrenFragment);
      }
    }
  }*/

  renderChildren() {
      if (this.args.useButton === false) {
        this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
      } else {
        this.reactRef.current.componentRef.current.childNodes[0].childNodes[0].remove();
        this.reactRef.current.componentRef.current.childNodes[0].prepend(document.getElementById(this.childrenSpanId));
      }
  }
}




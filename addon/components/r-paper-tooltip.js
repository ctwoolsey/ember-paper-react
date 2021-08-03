import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactTooltip } from "../react-component-lib/react-tooltip";

export default class RPaperTooltipComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TOOLTIP;
    this.handleClickChange = null;
    this.useButton = (this.args.useButton !== false);

  }

  renderChildren() {
    if (this.childrenFragment.childNodes.length > 0) {
      if (!this.useButton) {
        this.reactRef.current.componentRef.current.replaceChildren(this.childrenFragment);
      } else {
        this.reactRef.current.componentRef.current.childNodes[0].childNodes[0].remove();
        this.reactRef.current.componentRef.current.childNodes[0].prepend(this.childrenFragment);
      }
    }
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      title: this.args.title || null,
      arrow: this.args.arrow || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      describeChild: this.args.describeChild || null,
      disabled: this.args.disabled || false,
      disableFocusListener: this.args.disableFocusListener || null,
      disableHoverListener: this.args.disableHoverListener || null,
      disableInteractive: this.args.disableInteractive || null,
      disableTouchListener: this.args.disableTouchListener || null,
      enterDelay: this.args.enterDelay || null,
      enterNextDelay: this.args.enterNextDelay || null,
      enterTouchDelay: this.args.enterTouchDelay || null,
      followCursor: this.args.followCursor || null,
      id: this.findElementId(),
      leaveDelay: this.args.leaveDelay || null,
      leaveTouchDelay: this.args.leaveTouchDelay || null,
      onClose: this.args.onClose || null,
      onOpen: this.args.onOpen || null,
      open: this.args.open ||  null,
      placement: this.args.placement || null,
      popperComponent: this.args.popperComponent || null,
      popperProps: this.args.popperProps || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      transitionComponent: this.args.transitionComponent || null,
      transitionProps: this.args.TransitionProps || null,
      ref: this.reactRef
    };

    const reactPortal = ReactDOM.createPortal(<ReactTooltip {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }
}




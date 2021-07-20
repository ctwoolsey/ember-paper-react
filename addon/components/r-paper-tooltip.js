import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactTooltip } from "../react-component-lib/react-tooltip";

export default class RPaperTooltipComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.controlType = COMPONENT_TYPES.AUTOCOMPLETE;
    this.handleClickChange = null;

  }

  @action
  title() {
    if (this.reactRef) {
      this.reactRef.current.setTitle(this.args.title || null);
    }
  }

  @action
  disableFocusListener() {
    if (this.reactRef) {
      this.reactRef.current.setDisableFocusListener(this.args.disableFocusListener || null);
    }
  }

  @action
  disableHoverListener() {
    if (this.reactRef) {
      this.reactRef.current.setDisableHoverListener(this.args.disableHoverListener || null);
    }
  }

  @action
  disableInteractive() {
    if (this.reactRef) {
      this.reactRef.current.setDisableInteractive(this.args.disableInteractive || null);
    }
  }

  @action
  disableTouchListener() {
    if (this.reactRef) {
      this.reactRef.current.setDisableTouchListener(this.args.disableTouchListener || null);
    }
  }

  @action
  open() {
    if (this.reactRef) {
      this.reactRef.current.setOpen(this.args.open || null);
    }
  }

  @action
  placement() {
    if (this.reactRef) {
      this.reactRef.current.setPlacement(this.args.placement || null);
    }
  }

  @action
  sx() {
    if (this.reactRef) {
      this.reactRef.current.setSx(this.args.sx || null);
    }
  }

  renderElement() {
    if (this.el.hasChildNodes()) {
      this.reactRef.current.componentRef.current.replaceChildren(this.fragmentFromBlockContent());
    }
    super.renderElement();
  }

  @action
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    this.reactRef = React.createRef();

    let props = {
      title: this.args.title || null,
      arrow: this.args.arrow || null,
      classString: this.args.class || '',
      describeChild: this.args.describeChild || null,
      disableFocusListener: this.args.disableFocusListener || null,
      disableHoverListener: this.args.disableHoverListener || null,
      disableInteractive: this.args.disableInteractive || null,
      disableTouchListener: this.args.disableTouchListener || null,
      enterDelay: this.args.enterDelay || null,
      enterNextDelay: this.args.enterNextDelay || null,
      enterTouchDelay: this.args.enterTouchDelay || null,
      followCursor: this.args.followCursor || null,
      id: this.args.id || null,
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




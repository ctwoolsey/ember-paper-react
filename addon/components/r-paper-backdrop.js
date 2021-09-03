import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactBackdrop } from "../react-component-lib/react-backdrop";

export default class RPaperBackdropComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BACKDROP;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      components: this.args.components || null,
      componentsProps: this.args.componentsProps || null,
      id: this.findElementId(),
      invisible: this.args.invisible || null,
      onClick: this.handleClickChange,
      open: this.args.open || false,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      transitionDuration: this.args.transitionDuration || null,
      ref: this.reactRef,
      appear: this.args.appear || null,
      easing: this.args.easing || null,
      in: this.args.in || null,
      timeout: this.args.timeout || null,
      nodeRef: this.args.nodeRef || null,
      mountOnEnter: this.args.mountOnEnter || null,
      unmountOnExit: this.args.unmountOnExit || null,
      enter: this.args.enter || null,
      exit: this.args.exit || null,
      addEndListener: this.args.addEndListener || null,
      onEnter: this.args.onEnter || null,
      onEntering: this.args.onEntering || null,
      onEntered: this.args.onEntering || null,
      onExit: this.args.onExit || null,
      onExiting: this.args.onExiting || null,
      onExited: this.args.onExited || null
    };

    const reactPortal = ReactDOM.createPortal(<ReactBackdrop {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}








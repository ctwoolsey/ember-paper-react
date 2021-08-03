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
      ref: this.reactRef
    };

    const reactPortal = ReactDOM.createPortal(<ReactBackdrop {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}








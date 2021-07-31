import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactFontIcon } from "../react-component-lib/react-font-icon";

export default class RPaperFontIconComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.FONT_ICON;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      baseClassName: this.args.baseClassName || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      children: this.args.children || null,
      color: this.args.color || null,
      component: this.args.component || null,
      fontSize: this.args.fontSize || null,
      iconName: this.args.iconName || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactFontIcon {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}


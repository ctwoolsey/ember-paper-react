import {ReactMenuItem} from "../react-component-lib/react-menu-item"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperMenuItemComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU_ITEM;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      action: this.args.action || null,
      autoFocus: this.args.autoFocus || null,
      centerRipple: this.args.centerRipple || null,
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      dense: this.args.dense || null,
      disabled: this.args.disabled || false,
      disableGutters: this.args.disableGutters || null,
      disableRipple: this.args.disableRipple || null,
      disableTouchRipple: this.args.disableTouchRipple || null,
      focusRipple: this.args.focusRipple || null,
      focusVisibleClassName: this.args.focusVisibleClassName || null,
      id: this.findElementId(),
      linkComponent: this.args.linkComponent || null,
      onClick: this.handleClickChange,
      onFocusVisible: this.args.onFocusVisible || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      touchRippleProps: this.args.touchRippleProps || null,
      ref: this.reactRef,

    }

    const reactPortal = ReactDOM.createPortal(<ReactMenuItem {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }
}


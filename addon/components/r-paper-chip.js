import {ReactChip} from "../react-component-lib/react-chip"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactAvatar } from "../react-component-lib/react-avatar";

export default class RPaperChip extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHIP;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      avatar: this.args.avatar ? <ReactAvatar {...this.args.avatar}/> : null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      clickable: this.args.clickable || null,
      color: this.args.color || null,
      component: this.args.component || null,
      disabled: this.args.disabled || false,
      icon: this.createIcon(this.args.icon, this.args.iconProps),
      label: this.args.label || null,
      onClick: this.handleClickChange,
      onDelete: this.args.onDelete || null,
      size: this.args.size || '',
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactChip {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}

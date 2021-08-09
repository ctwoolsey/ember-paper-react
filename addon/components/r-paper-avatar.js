import {ReactAvatar} from "../react-component-lib/react-avatar"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperAvatarComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AVATAR;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      alt: this.args.alt || null,
      component: this.args.component || false,
      imgProps: this.args.imgProps || null,
      sizes: this.args.sizes || null,
      src: this.args.src || null,
      srcSet: this.args.srcSet || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef,
      id: this.findElementId(),
      onClick: this.handleClickChange
    }

    const reactPortal = ReactDOM.createPortal(<ReactAvatar {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}


import {ReactAppbar} from "../react-component-lib/react-appbar"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperAppbarComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.APPBAR;
  }


  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      color: this.args.color || null,
      enableColorOnDark: this.args.enableColorOnDark || null,
      position: this.args.position || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef,
      id: this.findElementId(),
      component: this.args.component || null,
      elevation: this.args.elevation || null,
      square: this.args.square || null
    }

    const reactPortal = ReactDOM.createPortal(<ReactAppbar {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}


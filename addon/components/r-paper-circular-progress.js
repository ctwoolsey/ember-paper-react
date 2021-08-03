import {ReactCircularProgress} from "../react-component-lib/react-circular-progress"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperCircularProgressComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CIRCULAR_PROGRESS;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      classString: this.initializeAndMergeClassWithClassString() || '',
      color: this.args.color || null,
      disableShrink: this.args.disableShrink || false,
      id: this.findElementId(),
      size: this.args.size || '',
      sx: this.args.sx || null,
      thickness: this.args.thickness || null,
      value: this.args.value || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef,

    }

    const reactPortal = ReactDOM.createPortal(<ReactCircularProgress {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}


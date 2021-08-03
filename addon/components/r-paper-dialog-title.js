import { ReactDialogTitle } from "../react-component-lib/dialog-related/react-dialog-title";
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperDialogTitleComponent extends BaseReactEmberComponent {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_TITLE;
    this.renderElement = this.renderElement.bind(this);
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      classString: this.initializeAndMergeClassWithClassString() || '',
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef,
      id: this.findElementId()
    }

    const reactPortal = ReactDOM.createPortal(<ReactDialogTitle {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}



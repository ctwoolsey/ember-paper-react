import { ReactDialogActions } from "../react-component-lib/dialog-related/react-dialog-actions";
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperDialogActionsComponent extends BaseReactEmberComponent {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_ACTIONS;
    this.renderElement = this.renderElement.bind(this);
  }

  readyToRender() {
    console.log('Actions ready to render');
    this.getChildren();
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      classString: this.args.class || '',
      disableSpacing: this.args.disableSpacing || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactDialogActions {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}


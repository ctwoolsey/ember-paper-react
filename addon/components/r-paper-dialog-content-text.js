import { ReactDialogContentText } from "../react-component-lib/dialog-related/react-dialog-content-text";
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";


export default class RPaperDialogContentTextComponent extends BaseReactEmberComponent {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_CONTENT_TEXT;
    this.renderElement = this.renderElement.bind(this);
  }

  readyToRender() {
    this.getChildren();
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      classString: this.args.class || '',
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactDialogContentText {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}



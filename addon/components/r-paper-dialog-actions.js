import { ReactDialogActions } from "../react-component-lib/dialog-related/react-dialog-actions";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperDialogActionsComponent extends BaseReactEmberComponent {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_ACTIONS;
  }

  renderElement() {
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();
  }

  afterRenderElement() {
    if (this.el.nextSibling && this.el.nextSibling.nextSibling) {
      while (this.el.nextSibling && this.el.nextSibling.nextSibling) {
        this.reactRef.current.componentRef.current.appendChild(this.el.nextSibling.nextSibling);
      }
    }
    this.el.remove();
  }

  getChildren() {
    let children = this.el.children;
    let childrenFragment = document.createDocumentFragment();
  }

  @action
  inserted(element) {
    this.el = element;
    this.getChildren();
    scheduleOnce('render', this, this.renderElement);
    scheduleOnce('afterRender', this, this.afterRenderElement);
    this.reactRef = React.createRef();

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


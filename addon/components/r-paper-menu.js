import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactMenu } from "../react-component-lib/react-menu";

export default class RPaperMenuComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU;
    this.handleClickChange = null;
    this.reactRender = this.reactRender.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
    this.findAnchorEl = this.findAnchorEl.bind(this);
  }

  renderElement() {
    this.setChildrenFragment();
    this.el.remove();

    this.renderStack.renderNext();
  }

  reactRender(insertElement) {
    insertElement.replaceChildren(this.childrenFragment);
  }

  saveChildren(childrenContainer) {
    this.childrenFragment = document.createDocumentFragment();
    while (childrenContainer.hasChildNodes()) {
      this.childrenFragment.appendChild(childrenContainer.firstChild);
    }
  }

  findAnchorEl() {
    let anchorEl = null;

    if (this.args.triggerId) {
      anchorEl = document.getElementById(this.args.triggerId);
    }

    return anchorEl;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      anchorEl: this.findAnchorEl(),
      autoFocus: this.args.autoFocus || null,
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      disableAutoFocusItem: this.args.disableAutoFocusItem || null,
      menuListProps: this.args.menuListProps || null,
      onClose: this.args.onClose || null,
      open: this.args.open || false,
      popoverClasses: this.args.popoverClasses || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      transitionDuration: this.args.transitionDuration || null,
      transitionProps: this.args.transitionProps || null,
      variant: this.args.variant || null,
      ref: this.reactRef,
      id: this.findElementId(),
      reactRenderCallback: this.reactRender,
      saveChildrenCallback: this.saveChildren
    };

    const reactPortal = ReactDOM.createPortal(<ReactMenu {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}







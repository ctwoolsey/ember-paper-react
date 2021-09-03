import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { once, scheduleOnce } from "@ember/runloop";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactMenu } from "../react-component-lib/react-menu";
import { v4 as uuidv4 } from "uuid";
import { tracked } from '@glimmer/tracking';

export default class RPaperMenuComponent extends BaseReactEmberComponent {
  @tracked menuLocation;
  @tracked canRenderChildren = false;

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU;
    this.hiddenChildrenId = uuidv4();
    this.hiddenChildren = null;
    this.handleClickChange = null;
    this.reactRender = this.reactRender.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
    this.findAnchorEl = this.findAnchorEl.bind(this);
  }

  renderElement() {
    this.hiddenChildren = document.getElementById(this.hiddenChildrenId);
    document.body.appendChild(this.hiddenChildren);
    once(this, this.initialMoveChildren);
    scheduleOnce('afterRender', this, this.continueRendering);
  }

  initialMoveChildren() {
    this.menuLocation = this.hiddenChildren;
    this.canRenderChildren = true;
  }

  continueRendering() {
    super.renderElement();
  }

  renderChildren() {
    //This is intentionally blank.
  }

  reactRender(insertElement) {
    this.menuLocation = insertElement;
  }

  saveChildren() {
    this.menuLocation = this.hiddenChildren;
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







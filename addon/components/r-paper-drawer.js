import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactDrawer } from "../react-component-lib/react-drawer";

export default class RPaperDrawerComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DRAWER;
    this.handleClickChange = null;
    this.reactRender = this.reactRender.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
  }

  renderElement() {
    this.renderStack.addRenderLaterCallback(this.renderLater, this);
    this.renderStack.renderNext();
  }

  renderLater() {
    this.childrenFragment = document.createDocumentFragment();
    this.childrenFragment.appendChild(document.getElementById(this.childrenSpanId));

    if (this.args.variant === 'persistent' ||
      this.args.variant === 'permanent' ||
      (this.args.modalProps && this.args.modalProps.keepMounted)) {
      if (this.childrenFragment.childNodes.length > 0) {
        this.reactRef.current.componentRef.current.getElementsByClassName('MuiDrawer-paper')[0].replaceChildren(this.childrenFragment);
      }
    }

    this.el.remove();
    const childEndMarker = document.getElementById(this.lastChildId);
    childEndMarker && childEndMarker.remove();
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

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      anchor: this.args.anchor || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      elevation: this.args.elevation || null,
      hideBackdrop: this.args.hideBackdrop || null,
      modalProps: this.args.modalProps || null,
      onClose: this.args.onClose || null,
      open: this.args.open || false,
      paperProps: this.args.paperProps || null,
      slideProps: this.args.slideProps || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      transitionDuration: this.args.transitionDuration || null,
      variant: this.args.variant || null,
      onOpen: this.args.onOpen || null,
      disableBackdropTransition: this.args.disableBackdropTransition || null,
      disableDiscovery: this.args.disableDiscovery || null,
      disableSwipeToOpen: this.args.disableSwipeToOpen || null,
      hysteresis: this.args.hysteresis || null,
      minFlingVelocity: this.args.minFlingVelocity || null,
      swipeAreaProps: this.args.swipeAreaProps || null,
      swipeAreaWidth: this.args.swipeAreaWidth || null,
      ref: this.reactRef,
      reactRenderCallback: this.reactRender,
      saveChildrenCallback: this.saveChildren,
      swipeable: this.args.swipeable || false,
      id: this.findElementId()
    };

    const reactPortal = ReactDOM.createPortal(<ReactDrawer {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}






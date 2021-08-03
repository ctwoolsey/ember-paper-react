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
    this.onKeyDown = this.onKeyDown.bind(this);

    //IF the component is told to keepMounted then a different sort of rendering is needed.
    if ((this.args.modalProps && !this.args.modalProps.keepMounted) ||
      (!this.args.modalProps && this.args.variant !== 'permanent' && this.args.variant !== 'persistent'))  {
      this.renderElement = this.renderDrawerElement.bind(this);
    }
  }

  renderDrawerElement() {
    this.setChildrenFragment();
    this.el.remove();

    this.renderStack.renderNext();
  }

  //used if modalProps.keepMounted is set.
  renderChildren() {
    if (this.childrenFragment.childNodes.length > 0) {
      this.reactRef.current.componentRef.current.getElementsByClassName('MuiDrawer-paper')[0].replaceChildren(this.childrenFragment);
    }
  }

  reactRender(insertElement) {
    insertElement.replaceChildren(this.childrenFragment);
    let drawer = document.getElementsByClassName(this.componentType)[0];
    //handling the keydown event listening for escape also activates the clicking outside of
    //the drawer for closing the window.
    drawer.addEventListener('keydown', this.onKeyDown);
  }

  saveChildren(childrenContainer) {
    this.childrenFragment = document.createDocumentFragment();
    while (childrenContainer.hasChildNodes()) {
      this.childrenFragment.appendChild(childrenContainer.firstChild);
    }
    let drawer = document.getElementsByClassName(this.componentType)[0];
    drawer.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(evt) {
    let isEscape = false;
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEscape = (evt.keyCode === 27);
    }

    if (isEscape) {
      this.args.onClose && this.args.onClose();
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






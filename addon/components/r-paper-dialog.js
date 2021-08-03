import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactDialog } from "../react-component-lib/dialog-related/react-dialog";

export default class RPaperDialogComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG;
    this.handleClickChange = null;
    this.reactRender = this.reactRender.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
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


  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      open: this.args.open || false,
      ariaDescribedBy: this.args.ariaDescribedBy || '',
      ariaLabelledBy: this.args.ariaLabelledBy || '',
      backdropComponent: this.args.backdropComponent || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      disableEscapeKeyDown: this.args.disableEscapeKeyDown || null,
      fullScreen: this.args.fullScreen || null,
      fullWidth: this.args.fullWidth || null,
      maxWidth: this.args.maxWidth || false,
      onBackdropClick: this.args.onBackdropClick || null,
      onClose: this.args.onClose || null,
      paperComponent: this.args.paperComponent || null,
      paperProps: this.args.paperProps || null,
      scroll: this.args.scroll || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      transitionComponent: this.args.transitionComponent || null,
      transitionDuration: this.args.transitionDuration || null,
      transitionProps: this.args.transitionProps || null,
      ref: this.reactRef,
      reactRenderCallback: this.reactRender,
      saveChildrenCallback: this.saveChildren
    };

    const reactPortal = ReactDOM.createPortal(<ReactDialog {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}





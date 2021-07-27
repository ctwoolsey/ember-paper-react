import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactDialog } from "../react-component-lib/dialog-related/react-dialog";

export default class RPaperDialogComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.controlType = COMPONENT_TYPES.DIALOG;
    this.handleClickChange = null;
    this.dialogRender = this.dialogRender.bind(this);
    this.dialogContents = [];
  }

  @action
  open() {
    if (this.reactRef) {
      this.reactRef.current.setOpen(this.args.open || null);
    }
  }

  @action
  fullScreen() {
    if (this.reactRef) {
      this.reactRef.current.setFullScreen(this.args.fullScreen || null);
    }
  }

  @action
  fullWidth() {
    if (this.reactRef) {
      this.reactRef.current.setFullWidth(this.args.fullWidth || false);
    }
  }

  @action
  maxWidth() {
    if (this.reactRef) {
      this.reactRef.current.setMaxWidth(this.args.maxWidth || null);
    }
  }

  /*renderElement() {
    //maybe will need to call this and hide the content until it is inserted into the dialog?
    //or open the dialog but set an attribute that makes it hidden initially? While the children get added?

    //this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    //this.cloneAttributes(this.reactRef.current, this.el);
    //this.initializeDynamicStyles();
    //this.el.remove();
  }*/

  renderElement() {
 //   this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
 //   this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
 //   this.initializeDynamicStyles();

  }

  afterRenderElement() {
    /*if (this.el.nextSibling && this.el.nextSibling.nextSibling) {
      while (this.el.nextSibling && this.el.nextSibling.nextSibling) {
        this.reactRef.current.componentRef.current.appendChild(this.el.nextSibling.nextSibling);
      }
    }*/
    let currentElement = this.el.nextSibling;
    //if (currentElement && currentElement.nextSibling) {
    while (currentElement && currentElement.nextSibling) {
      this.dialogContents.push(currentElement.nextSibling);
      currentElement = currentElement.nextSibling;
    }
    /*while (!currentElement.hasClass('end-children')) {

      currentElement = currentElement.nextSibling;
    }*/
    //}

    this.el.remove();
  }

  dialogRender(insertElement) {
    console.log('in dialog render');
    this.dialogContents.forEach((dialogContent, index) => {
      if (index === 1) {
        insertElement.replaceChildren(dialogContent);
      } else {
        insertElement.appendChild(dialogContent);
      }
    })
    //insertElement.replaceChildren(this.fragmentFromBlockContent());
    /*if (this.el.nextSibling && this.el.nextSibling.nextSibling) {
      while (this.el.nextSibling && this.el.nextSibling.nextSibling) {
        insertElement.appendChild(this.el.nextSibling.nextSibling);
      }
    }*/
//    insertElement.replaceChildren(this.fragment);
    //this.cloneAttributes(this.reactRef.current, this.el);
    //this.initializeDynamicStyles();
    //this.el.remove();
  }

  getDialogContents() {

  }

  @action
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);
    scheduleOnce('afterRender', this, this.afterRenderElement);
    this.reactRef = React.createRef();
//    this.fragment = this.fragmentFromBlockContent();
    //this.el.remove();

    let props = {
      open: this.args.open || false,
      ariaDescribedBy: this.args.ariaDescribedBy || '',
      ariaLabelledBy: this.args.ariaLabelledBy || '',
      backdropComponent: this.args.backdropComponent || null,
      classString: this.args.class || '',
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
      dialogRenderCallback: this.dialogRender
    };

    const reactPortal = ReactDOM.createPortal(<ReactDialog {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}





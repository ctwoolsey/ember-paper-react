import { ReactDialogActions } from "../react-component-lib/dialog-related/react-dialog-actions";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { inject as service } from '@ember/service';

export default class RPaperDialogActionsComponent extends BaseReactEmberComponent {
  @service renderStack;

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_ACTIONS;
    this.renderElement = this.renderElement.bind(this);
  }

  /*renderElement() {
    console.log('render action');
    /!*this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();


    this.afterRenderElement();
    this.renderStack.renderNextObject();*!/

    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();


    this.setChildrenFragment();
    this.reactRef.current.componentRef.current.replaceChildren(this.childrenFragment);
    this.el.remove();

    this.renderStack.renderNextObject();
  }*/

  /*afterRenderElement() {
    console.log('after render action');
    //because the react element is inserted adjecent future children of the react component are siblings.
    let child = this.reactRef.current.componentRef.current.nextSibling;
    let childrenFragment = document.createDocumentFragment();
    while (child && !this.isEndElement(child)) {
      let currentElement = child;
      child = child.nextSibling;
      childrenFragment.appendChild(currentElement);
    }

    this.reactRef.current.componentRef.current.replaceChildren(childrenFragment);

    child.remove();
    this.el.remove();
  }*/


  readyToRender() {
    console.log('Actions ready to render');
    this.getChildren();
  }

  @action
  inserted(element) {
    super.inserted(element);
    /*if (this.doesComponentHaveReactChildren()) {
      this.renderStack.addRenderObject(this.renderElement);
    }*/
    //scheduleOnce('render', this, this.renderElement);
    //scheduleOnce('afterRender', this, this.afterRenderElement)

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


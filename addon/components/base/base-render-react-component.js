import BaseEmberPaperReact from "./base-ember-paper-react";
import { tracked } from "@glimmer/tracking";
import { scheduleOnce } from '@ember/runloop';
import ReactDOM from "react-dom";
import React from "react";
import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';
import MenuItem from "@mui/material/MenuItem";

export default class BaseRenderReactComponent extends BaseEmberPaperReact {
  @tracked moveLocation;
  @service renderStack;
  @service reactComponentHolder;

  constructor() {
    super(...arguments);
    this.reactRenderId = uuidv4();
    this.childrenFragment = document.createDocumentFragment();
    //   this.moveLocation = this.childrenFragment;
  }

  renderChildren() {
    //   this.moveLocation = this.reactRef.current.componentRef.current;
  }

  createReactComponent() {
    //<outerEl><innerEl/></outerEl>
    //Inner El will register inserted first, then Outer El will
    //So should be able to render right away.
    //Need to Grab children First if there are children
    //console.log(`Has own property: ${Object.hasOwnProperty.call('children', this.propsToPass)}`);

    const ReactComponent = this.reactElement;
    if (this.propsToPass.hasOwnProperty('children')) {
      const childArray = [];
      Array.from(this.el.childNodes).forEach((child) => {
          console.log(`ComponentType: ${this.componentType}; nodeName: ${child.nodeName}`);
          if (child.nodeName === '#text') {
            childArray.push(child.nodeValue);
          } else {
            if (child.hasAttribute('data-react-render-id')) {
              childArray.push(this.reactComponentHolder.load(child.dataset.reactRenderId));
            }
          }
      });

      const createdReactComponent = React.createElement(ReactComponent,this.propsToPass, childArray);
      this.reactComponentHolder.add(this.reactRenderId, createdReactComponent);
    }

    const parent = this.el.parentElement;
    let FoundReactElement = this.reactComponentHolder.load(this.reactRenderId);
    ReactDOM.render(FoundReactElement, parent);




    /*this.renderStack.addRenderCallback(this.renderElement, this);
    scheduleOnce('render', this, this.checkIfCanRender);
    if (this.reactElement) {
      const ReactComponent = this.reactElement;
      const reactPortal = ReactDOM.createPortal(<ReactComponent {...this.propsToPass}/>, this.el.parentNode);
      ReactDOM.render(reactPortal, document.createElement('div'));
    }*/
  }
}

import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';
import React from "react";

function canBeRealReactChild(c){
  return class CanBeRealReactChild extends c {
    @service reactChildren;

    constructor() {
      super(...arguments);
      this.createdReactElement = null;
      this.parentIdentifier = null;
    }

    createReactComponent() {
      if (this.el.parentElement.dataset?.parentIdentifier) {
        const ReactComponent = this.reactElement;
        this.propsToPass.key = uuidv4();
        this.createdReactElement = React.createElement(ReactComponent,this.propsToPass, null);
        this.parentIdentifier = this.el.parentElement.dataset.parentIdentifier;
        this.reactChildren.save(this.parentIdentifier,this.createdReactElement);
      } else {
        super.createReactComponent();
      }
    }

    willDestroy() {
      this.reactChildren.delete(this.parentIdentifier,this.createdReactElement);
    }
  }
}

export { canBeRealReactChild }

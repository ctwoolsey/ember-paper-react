import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';
import React from "react";

function canBeRealReactChild(c){
  return class CanBeRealReactChild extends c {
    @service reactChildren;

    createReactComponent() {
      if (this.el.parentElement.dataset?.parentIdentifier) {
        const ReactComponent = this.reactElement;
        this.propsToPass.key = uuidv4();
        const reactElement = React.createElement(ReactComponent,this.propsToPass, null);
        this.reactChildren.save(this.el.parentElement.dataset.parentIdentifier,reactElement);
      } else {
        super.createReactComponent();
      }
    }
  }
}

export { canBeRealReactChild }

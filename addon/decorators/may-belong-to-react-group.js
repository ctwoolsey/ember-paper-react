import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { protectChildrenFromReactDestruction } from "./protect-children-from-react-destruction";


function mayBelongToReactGroup(c){
  @protectChildrenFromReactDestruction
  class MayBelongToReactGroup extends c {
    @service reactChildren;

    constructor() {
      super(...arguments);
      this.createdReactElement = null;
      this.groupIdentifier = null;
    }

    createReactComponent() {
      if (this.el.parentElement?.dataset?.groupIdentifier) {
        const ReactComponent = this.reactElement;
        this.propsToPass.key = uuidv4();
        this.createdReactElement = React.createElement(ReactComponent,this.propsToPass);
        this.groupIdentifier = this.el.parentElement.dataset.groupIdentifier;
        this.reactChildren.save(this.groupIdentifier,this.createdReactElement, this.renderElementItems);
      } else {
        super.createReactComponent();
      }
    }

    willDestroy() {
      this.reactChildren.delete(this.groupIdentifier,this.createdReactElement);
    }
  }

  return MayBelongToReactGroup;
}

export { mayBelongToReactGroup }

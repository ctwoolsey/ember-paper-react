import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import ReactDOM from "react-dom";

function usesRealReactChildren(c){
  return class UsesRealReactChildren extends c {
    @service reactChildren;

    constructor() {
      super(...arguments);
      this.parentIdentifier = uuidv4();
      this.reactChildren.create(this.parentIdentifier, this.onChildAdded);
    }

    initializeProps() {
      super.initializeProps();

      this.propsToPass.children = this.reactChildren.load(this.parentIdentifier);
    }

    @action
    onChildAdded() {
      console.log('child added');
      /*let childrenCount = this.el.childElementCount;
      console.log('Children Total: '+childrenCount + '; Queue length: '+ this.propsToPass.children.length);*/
    }
    //inserted needs to happen after children
    /*@action
    inserted(element) {
      this.el = element;
      this.reactRef = React.createRef();
      this.initializeProps();


      this.renderStack.addRenderCallback(this.renderElement, this);
      scheduleOnce('render', this, this.checkIfCanRender);
      const ReactComponent = this.reactElement;
      const reactPortal = ReactDOM.createPortal(<ReactComponent {...this.propsToPass}/>, element.parentNode);
      ReactDOM.render(reactPortal, document.createElement('div'));
    }*/

   /* createReactComponent() {
      console.log('createReactComponents');
      let childrenCount = this.el.childElementCount;
      console.log('Children Total: '+childrenCount + '; Queue length: '+ this.propsToPass.children.length);
    }*/

  }
}

export { usesRealReactChildren }

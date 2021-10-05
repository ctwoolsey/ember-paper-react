import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';

function reactGroup(c){
  return class ReactGroup extends c {
    @service reactChildren;

    constructor() {
      super(...arguments);
      this.parentIdentifier = uuidv4();
      this.reactChildren.create(this.parentIdentifier, this.onChildChanged);
    }

    initializeProps() {
      super.initializeProps();
      this.propsToPass.children = this.reactChildren.load(this.parentIdentifier);
    }

    @action
    onChildChanged() {
      if (this.propsToPass.children) {
        this.changeReactState('children', this.propsToPass.children);
      }
    }

    @action
    renderElement() {
      super.renderElement();
      this.reactChildren.render(this.parentIdentifier);
    }

    willDestroy() {
      this.reactChildren.destroyReactChildren(this.parentIdentifier);
      super.willDestroy();
    }
  }
}

export { reactGroup }

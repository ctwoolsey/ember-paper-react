import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';

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
    }
  }
}

export { usesRealReactChildren }

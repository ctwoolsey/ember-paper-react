import { action } from '@ember/object';

function hasAttributeChildren(c){
  return class HasAttributeChildren extends c {
    constructor() {
      super(...arguments);
      this.reactComponentFragments = {};
      this.reactFragmentMoveMethods = {};
    }

    @action
    loadAttributeInfo(attributeName, fragment, moveFragmentMethod) {
      this.reactComponentFragments[attributeName] = fragment;
      this.reactFragmentMoveMethods[attributeName] = moveFragmentMethod;
    }
  }
}

export { hasAttributeChildren }

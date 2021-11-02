import { action } from '@ember/object';

function hasAttributeNodeChildren(c){
  return class HasAttributeNodeChildren extends c {
    constructor() {
      super(...arguments);
      this.reactComponentFragments = {};
      this.reactFragmentMoveMethods = {};
    }

    getAttributeFragment(attributeName) {
      return Object.prototype.hasOwnProperty.call(this.reactComponentFragments, attributeName) ?
        this.reactComponentFragments[attributeName] : null;
    }

    getAttributeMoveMethod(attributeName) {
      return Object.prototype.hasOwnProperty.call(this.reactFragmentMoveMethods, attributeName) ?
        this.reactFragmentMoveMethods[attributeName] : null;
    }

    @action
    loadAttributeInfo(attributeName, fragment, moveFragmentMethod) {
      this.reactComponentFragments[attributeName] = fragment;
      this.reactFragmentMoveMethods[attributeName] = moveFragmentMethod;
    }

    @action
    renderElementItems() {
      super.renderElementItems();
      this.onRenderAttributeNodeChildren && this.onRenderAttributeNodeChildren();
    }
  }
}

export { hasAttributeNodeChildren }

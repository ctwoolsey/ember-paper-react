import { hasAttributeNodeChildren } from './has-attribute-node-children';

function hasProtectedAttributeNodeChildren(c){
  /* protects attribute node children when the component re-renders */

  @hasAttributeNodeChildren
  class HasProtectedAttributeNodeChildren extends c {
    constructor() {
      super(...arguments);
      this.onRenderAttributeNodeChildren = this.onRenderAttributeNodeChildren.bind(this);
      this.saveAttributeNodeChildren = this.saveAttributeNodeChildren.bind(this);
    }

    initializeProps() {
      super.initializeProps();
      this.propsToPass.reactUpdateCallback = this.onRenderAttributeNodeChildren;
      this.propsToPass.saveAttributeNodeChildrenCallback = this.saveAttributeNodeChildren;
    }

    getAttributeSaveMethod(attributeName) {
      return Object.prototype.hasOwnProperty.call(this.reactFragmentSaveMethods, attributeName) ?
        this.reactFragmentSaveMethods[attributeName] : null;
    }

    onRenderAttributeNodeChildren() {
      super.onRenderAttributeNodeChildren && super.onRenderAttributeNodeChildren();
    }

    renderChildren() {
      //intentionally left blank
    }

    saveAttributeNodeChildren() {
      super.saveAttributeNodeChildren && super.saveAttributeNodeChildren();

    }
  }
  return HasProtectedAttributeNodeChildren;
}

export { hasProtectedAttributeNodeChildren }

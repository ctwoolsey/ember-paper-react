function reactPresentationCapable(c){
  return class ReactPresentationCapable extends c {
    constructor() {
      super(...arguments);
      this.reactRender = this.reactRender.bind(this);
      this.saveChildren = this.saveChildren.bind(this);
    }

    initializeProps() {
      super.initializeProps();
      this.propsToPass.reactRenderCallback = this.reactRender;
      this.propsToPass.saveChildrenCallback = this.saveChildren;
    }

    reactRender(insertElement) {
      if (super.reactRender) {
        super.reactRender(insertElement);
      } else {
        this.moveLocation = insertElement;
      }
    }

    saveChildren() {
      if (super.saveChildren) {
        super.saveChildren();
      } else {
        this.moveLocation = this.childrenFragment;
      }
    }
  }
}

export { reactPresentationCapable }

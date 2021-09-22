function reactPresentationCapable(c){
  return class ReactPresentationCapable extends c {
    constructor() {
      super(...arguments);
      this.reactRender = this.reactRender.bind(this);
      this.saveChildren = this.saveChildren.bind(this);
    }

    initializeProps() {
      super.initializeProps();
      this.props.reactRenderCallback = this.reactRender;
      this.props.saveChildrenCallback = this.saveChildren;
    }

    reactRender(insertElement) {
      this.moveLocation = insertElement;
    }

    saveChildren() {
      this.moveLocation = this.childrenFragment;
    }
  }
}

export { reactPresentationCapable }

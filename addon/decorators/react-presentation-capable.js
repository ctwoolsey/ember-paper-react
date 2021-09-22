import { v4 as uuidv4 } from "uuid";

function reactPresentationCapable(c){
  return class ReactPresentationCapable extends c {
    constructor() {
      super(...arguments);
      this.hiddenChildrenId = uuidv4();
      this.hiddenChildren = null;
      this.reactRender = this.reactRender.bind(this);
      this.saveChildren = this.saveChildren.bind(this);
    }

    initializeProps() {
      super.initializeProps();
      this.props.reactRenderCallback = this.reactRender;
      this.props.saveChildrenCallback = this.saveChildren;
    }

    renderElement() {
      this.hiddenChildren = document.getElementById(this.hiddenChildrenId);
      document.body.appendChild(this.hiddenChildren);
      this.moveLocation = this.hiddenChildren;

      super.renderElement();
    }

    reactRender(insertElement) {
      this.moveLocation = insertElement;
    }

    saveChildren() {
      this.moveLocation = this.hiddenChildren;
    }

    willDestroy() {
      this.hiddenChildren && this.hiddenChildren.remove();
      super.willDestroy();
    }
  }
}

export { reactPresentationCapable }

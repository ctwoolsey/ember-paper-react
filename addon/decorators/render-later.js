import { protectChildrenFromReactDestruction } from "./protect-children-from-react-destruction";

function renderLater(c){
  @protectChildrenFromReactDestruction
  class RenderLater extends c {
    renderElement() {
      this.renderStack.addRenderLaterCallback(this.renderLater, this);
      this.renderStack.renderNext();
    }

    renderLater() {
      super.renderLater && super.renderLater();
      this.el.remove();
      this.renderStack.renderNext();
    }
  }
  return RenderLater;
}

export { renderLater }

function renderLater(c){
  return class RenderLater extends c {

    renderElement() {
      this.renderStack.addRenderLaterCallback(this.renderLater, this);
      this.renderStack.renderNext();
    }

    renderLater() {
      super.renderLater && super.renderLater();
    }

  }
}

export { renderLater }

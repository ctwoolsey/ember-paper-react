function renderLater(c){
  return class RenderLater extends c {

    renderElement() {
      this.renderStack.addRenderLaterCallback(this.renderLater, this);
      this.renderStack.renderNext();
    }

    renderLater() {
      super.renderLater && super.renderLater();
      this.el.remove();
      const childEndMarker = document.getElementById(this.lastChildId);
      childEndMarker && childEndMarker.remove();
      this.renderStack.renderNext();
    }

  }
}

export { renderLater }

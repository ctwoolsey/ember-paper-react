import BaseEmberPaperReact from "./base-ember-paper-react";
import { once, scheduleOnce } from '@ember/runloop';
import { tracked } from "@glimmer/tracking";

export default class BaseInElementRender extends BaseEmberPaperReact {
  @tracked moveLocation;
  @tracked canRenderChildren = false;

  constructor() {
    super(...arguments);
    this.moveChildren = this.moveChildren.bind(this);
  }

  renderElement() {
    if (this.moveLocation) {
      once(this, this.moveChildren);
    }
    scheduleOnce('afterRender', this, this.continueRendering);
  }

  renderChildren() {
    //leave blank as children are handled in the local render element
  }

  continueRendering() {
    super.renderElement();
  }

  moveChildren() {
    this.canRenderChildren = true;
  }
}

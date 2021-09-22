import BaseEmberPaperReact from "./base-ember-paper-react";
import { tracked } from "@glimmer/tracking";

export default class BaseInElementRender extends BaseEmberPaperReact {
  @tracked moveLocation;

  constructor() {
    super(...arguments);
    this.childrenFragment = document.createDocumentFragment();
    this.moveLocation = this.childrenFragment;
  }

  renderChildren() {
    //leave blank as children are handled in the local render element
  }

}

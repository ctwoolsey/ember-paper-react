import BaseEmberPaperReact from "./base-ember-paper-react";
import { tracked } from "@glimmer/tracking";

export default class BaseInElementRender extends BaseEmberPaperReact {
  @tracked moveLocation;

  constructor() {
    super(...arguments);
    //this.childrenFragment = document.createElement('template'); //document.createDocumentFragment();
    //this.childrenFragment = document.createElement('div');
    //document.body.append(this.childrenFragment);
    this.childrenFragment = document.createDocumentFragment();
    this.moveLocation = this.childrenFragment;
  }

  renderChildren() {
    this.moveLocation = this.reactRef.current.componentRef.current;
  }
}

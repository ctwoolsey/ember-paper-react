import BaseEmberPaperReact from "./base-ember-paper-react";
import { v4 as uuidv4 } from "uuid";

export default class BaseChildSpanRender extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.childrenFragment = document.createDocumentFragment();
    this.childrenSpanId = uuidv4();
  }

  setChildrenFragment() {
    const childrenSpan = document.getElementById(this.childrenSpanId);
    while(childrenSpan && childrenSpan.firstChild) {
      this.childrenFragment.appendChild(childrenSpan.firstChild);
    }

  }

  renderElement() {
    super.renderElement();
    const childrenSpan = document.getElementById(this.childrenSpanId);
    childrenSpan && childrenSpan.remove();
  }
}

import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

export default class AttributeChild extends Component {
  @tracked moveLocation;

  constructor() {
    super(...arguments);
    this.childrenFragment = document.createDocumentFragment();
    this.moveLocation = this.childrenFragment;
  }

  @action
  moveFragment(locationToMove) {
    this.moveLocation = locationToMove;
  }

  @action
  inserted(element) {
    this.args.loadAttributeInfo && this.args.loadAttributeInfo(this.args.attribute, this.childrenFragment, this.moveFragment);
    element.remove();
  }

  willDestroy() {
    this.childrenFragment.remove();
    super.willDestroy();
  }
}

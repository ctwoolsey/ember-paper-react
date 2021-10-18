import { ReactCardHeader } from '../react-component-lib/card-related/react-card-header';
import { COMPONENT_TYPES} from '../constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardHeaderPropObj } from '../prop-files/card-header-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";

@hasAttributeNodeChildren
export default class RPaperCardHeaderComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_HEADER;
    this.loadPropObject(CardHeaderPropObj);
    this.reactElement = ReactCardHeader;
  }

  onRenderAttributeNodeChildren() {
    this.moveAttributes('avatar', 'MuiCardHeader-avatar');
    this.moveAttributes('action', 'MuiCardHeader-action');
    this.moveAttributes('subheader', 'MuiCardHeader-subheader');
    this.moveAttributes('title', 'MuiCardHeader-title');
  }

  moveAttributes(attribute, className) {
    const reactComp = this.reactRef.current.componentRef.current;
    const moveMethod = this.getAttributeMoveMethod(attribute);
    if (moveMethod) {
      moveMethod(reactComp.getElementsByClassName(className)[0]);
    }
  }

  createReactComponent() {
    //signal to react component whether to create dummy placeholders for avatar and action

    if (this.getAttributeFragment('avatar')) {
      this.propsToPass.avatar = true;
    }
    if (this.getAttributeFragment('action')) {
      this.propsToPass.action = true;
    }
    super.createReactComponent();
  }
}



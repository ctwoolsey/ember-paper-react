import { ReactCardHeader } from '../react-component-lib/card-related/react-card-header';
import { CARD_HEADER } from "../constants/card-header";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardHeaderPropObj } from '../prop-files/card-header-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";

@hasAttributeNodeChildren
export default class RPaperCardHeaderComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = CARD_HEADER.COMPONENT_TYPE;
    this.loadPropObject(CardHeaderPropObj);
    this.reactElement = ReactCardHeader;
  }

  get avatar(){
    return CARD_HEADER.ATTRIBUTE_COMPONENT.AVATAR
  }

  get action(){
    return CARD_HEADER.ATTRIBUTE_COMPONENT.ACTION
  }

  get subheader(){
    return CARD_HEADER.ATTRIBUTE_COMPONENT.SUBHEADER
  }

  get title(){
    return CARD_HEADER.ATTRIBUTE_COMPONENT.TITLE
  }

  onRenderAttributeNodeChildren() {
    this.moveAttributes(CARD_HEADER.ATTRIBUTE_COMPONENT.AVATAR, CARD_HEADER.AVATAR_SPAN);
    this.moveAttributes(CARD_HEADER.ATTRIBUTE_COMPONENT.ACTION, CARD_HEADER.ACTION_SPAN);
    this.moveAttributes(CARD_HEADER.ATTRIBUTE_COMPONENT.SUBHEADER, CARD_HEADER.SUBHEADER_SPAN);
    this.moveAttributes(CARD_HEADER.ATTRIBUTE_COMPONENT.TITLE, CARD_HEADER.TITLE_SPAN);
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

    if (this.getAttributeFragment(CARD_HEADER.ATTRIBUTE_COMPONENT.AVATAR)) {
      this.propsToPass.avatar = true;
    }
    if (this.getAttributeFragment(CARD_HEADER.ATTRIBUTE_COMPONENT.ACTION)) {
      this.propsToPass.action = true;
    }
    super.createReactComponent();
  }
}



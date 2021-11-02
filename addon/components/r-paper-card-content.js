import { ReactCardContent } from '../react-component-lib/card-related/react-card-content';
import { CARD_CONTENT } from "../constants/card-content";
import { CardContentPropObj } from '../prop-files/card-content-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardContentComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = CARD_CONTENT.COMPONENT_TYPE;
    this.loadPropObject(CardContentPropObj);
    this.reactElement = ReactCardContent;
  }
}




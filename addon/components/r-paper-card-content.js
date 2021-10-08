import { ReactCardContent } from '../react-component-lib/card-related/react-card-content';
import { COMPONENT_TYPES } from '../constants/constants';
import { CardContentPropObj } from '../prop-files/card-content-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardContentComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_CONTENT;
    this.loadPropObject(CardContentPropObj);
    this.reactElement = ReactCardContent;
  }
}




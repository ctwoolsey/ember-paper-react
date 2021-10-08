import { ReactCardMedia } from '../react-component-lib/card-related/react-card-media';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { CardMediaPropObj } from '../prop-files/card-media-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardMediaComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_MEDIA;
    this.loadPropObject(CardMediaPropObj);
    this.reactElement = ReactCardMedia;
  }
}



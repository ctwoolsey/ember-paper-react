import { ReactCardMedia } from '../react-component-lib/card-related/react-card-media';
import { CARD_MEDIA } from "../constants/card-media";
import { CardMediaPropObj } from '../prop-files/card-media-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardMediaComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = CARD_MEDIA.COMPONENT_TYPE;
    this.loadPropObject(CardMediaPropObj);
    this.reactElement = ReactCardMedia;
  }
}



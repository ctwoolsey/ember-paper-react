import { ReactCardMedia } from '../react-component-lib/card-related/react-card-media';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardMediaPropObj } from '../react-component-lib/utility/props/card-media-props';

export default class RPaperCardMediaComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_MEDIA;
    this.loadPropObject(CardMediaPropObj);
    this.reactElement = ReactCardMedia;
  }
}



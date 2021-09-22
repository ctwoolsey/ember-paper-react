import { ReactCardActionArea } from '../react-component-lib/card-related/react-card-action-area';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardActionAreaPropObj } from '../react-component-lib/utility/props/card-action-area-props';

export default class RPaperCardActionAreaComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTION_AREA;
    this.loadPropObject(CardActionAreaPropObj);
    this.reactElement = ReactCardActionArea;
  }
}



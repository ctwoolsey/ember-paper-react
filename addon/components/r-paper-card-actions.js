import { ReactCardActions } from '../react-component-lib/card-related/react-card-actions';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardActionPropObj } from '../react-component-lib/utility/props/card-actions-props';

export default class RPaperCardActionsComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTIONS;
    this.loadPropObject(CardActionPropObj);
    this.reactElement = ReactCardActions;
  }
}



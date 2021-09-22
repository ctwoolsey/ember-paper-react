import { ReactCard } from '../react-component-lib/card-related/react-card';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardPropObj } from '../react-component-lib/utility/props/card-props';

export default class RPaperCardComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD;
    this.loadPropObject(CardPropObj);
    this.reactElement = ReactCard;
  }
}


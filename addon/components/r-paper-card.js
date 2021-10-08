import { ReactCard } from '../react-component-lib/card-related/react-card';
import { COMPONENT_TYPES } from '../constants/constants';
import { CardPropObj } from '../prop-files/card-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD;
    this.loadPropObject(CardPropObj);
    this.reactElement = ReactCard;
  }
}


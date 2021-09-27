import { ReactCard } from '../react-component-lib/card-related/react-card';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { CardPropObj } from '../react-component-lib/utility/props/card-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD;
    this.loadPropObject(CardPropObj);
    this.reactElement = ReactCard;
  }
}


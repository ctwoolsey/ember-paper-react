import { ReactCard } from '../react-component-lib/card-related/react-card';
import { CARD } from "../constants/card";
import { CardPropObj } from '../prop-files/card-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = CARD.COMPONENT_TYPE;
    this.loadPropObject(CardPropObj);
    this.reactElement = ReactCard;
  }
}


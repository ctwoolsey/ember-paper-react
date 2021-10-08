import { ReactCardActions } from '../react-component-lib/card-related/react-card-actions';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { CardActionPropObj } from '../prop-files/card-actions-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardActionsComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTIONS;
    this.loadPropObject(CardActionPropObj);
    this.reactElement = ReactCardActions;
  }
}



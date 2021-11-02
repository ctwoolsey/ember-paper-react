import { ReactCardActions } from '../react-component-lib/card-related/react-card-actions';
import { CARD_ACTIONS } from "../constants/card-actions";
import { CardActionPropObj } from '../prop-files/card-actions-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardActionsComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = CARD_ACTIONS.COMPONENT_TYPE;
    this.loadPropObject(CardActionPropObj);
    this.reactElement = ReactCardActions;
  }
}



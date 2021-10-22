import { ReactCardActionArea } from '../react-component-lib/card-related/react-card-action-area';
import { CARD_ACTION_AREA } from "../constants/card-action-area";
import { CardActionAreaPropObj } from '../prop-files/card-action-area-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperCardActionAreaComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = CARD_ACTION_AREA.COMPONENT_TYPE;
    this.loadPropObject(CardActionAreaPropObj);
    this.reactElement = ReactCardActionArea;
  }
}



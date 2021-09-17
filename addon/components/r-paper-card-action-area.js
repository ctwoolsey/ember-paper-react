import { ReactCardActionArea } from '../react-component-lib/card-related/react-card-action-area';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CardActionAreaProps,
  CardActionAreaStateProps,
  CardActionAreaPropsNotForComponent,
  CardActionAreaStatePropsNotForComponent
} from '../react-component-lib/utility/props/card-action-area-props';

export default class RPaperCardActionAreaComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTION_AREA;
    this.props = CardActionAreaProps();
    this.stateProps = CardActionAreaStateProps();
    this.notForComponentProps = CardActionAreaPropsNotForComponent();
    this.notForComponentStateProps = CardActionAreaStatePropsNotForComponent();
    this.reactElement = ReactCardActionArea;
  }
}



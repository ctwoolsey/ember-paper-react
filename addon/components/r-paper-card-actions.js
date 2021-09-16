import { ReactCardActions } from '../react-component-lib/card-related/react-card-actions';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CardActionProps,
  CardActionStateProps,
  CardActionPropsNotForComponent
} from '../react-component-lib/utility/props/card-actions-props';

export default class RPaperCardActionsComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTIONS;
    this.props = CardActionProps();
    this.stateProps = CardActionStateProps();
    this.notForComponentProps = CardActionPropsNotForComponent();
    this.reactElement = ReactCardActions;
  }
}



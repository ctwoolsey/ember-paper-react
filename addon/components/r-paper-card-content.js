import { ReactCardContent } from '../react-component-lib/card-related/react-card-content';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CardContentProps,
  CardContentStateProps,
  CardContentPropsNotForComponent
} from '../react-component-lib/utility/props/card-content-props';

export default class RPaperCardContentComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_CONTENT;
    this.props = CardContentProps();
    this.stateProps = CardContentStateProps();
    this.notForComponentProps = CardContentPropsNotForComponent();
    this.reactElement = ReactCardContent;
  }
}




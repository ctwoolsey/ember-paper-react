import { ReactCardHeader } from '../react-component-lib/card-related/react-card-header';
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CardHeaderProps,
  CardHeaderStateProps,
  CardHeaderPropsNotForComponent
} from '../react-component-lib/utility/props/card-header-props';

export default class RPaperCardHeaderComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_HEADER;
    this.props = CardHeaderProps();
    this.stateProps = CardHeaderStateProps();
    this.notForComponentProps = CardHeaderPropsNotForComponent();
    this.reactElement = ReactCardHeader;
    this.renderAdditionalItems = this.renderAdditionalItems.bind(this);
  }

  renderAdditionalItems() {
    this.findAndLoadReactAttributeChildren();
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.AVATAR, 'MuiCardHeader-avatar');
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.ACTION, 'MuiCardHeader-action');
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.SUBHEADER, 'MuiCardHeader-subheader');
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.TITLE, 'MuiCardHeader-title');
  }

  renderChildren() {
      //intentionally empty
  }

}



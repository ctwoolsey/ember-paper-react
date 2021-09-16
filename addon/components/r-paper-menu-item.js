import {ReactMenuItem} from '../react-component-lib/react-menu-item'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  MenuItemProps,
  MenuItemStateProps,
  MenuItemPropsNotForComponent
} from '../react-component-lib/utility/props/menu-item-props';

export default class RPaperMenuItemComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU_ITEM;
    this.props = MenuItemProps();
    this.stateProps = MenuItemStateProps();
    this.notForComponentProps = MenuItemPropsNotForComponent();
    this.reactElement = ReactMenuItem;
  }
}


import {ReactMenuItem} from '../react-component-lib/react-menu-item'
import { COMPONENT_TYPES } from '../constants/constants';
import { MenuItemPropObj } from '../prop-files/menu-item-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperMenuItemComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU_ITEM;
    this.loadPropObject(MenuItemPropObj);
    this.reactElement = ReactMenuItem;
  }
}


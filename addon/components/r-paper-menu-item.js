import {ReactMenuItem} from '../react-component-lib/react-menu-item'
import { MENU_ITEM } from "../constants/menu-item";
import { MenuItemPropObj } from '../prop-files/menu-item-props';
import BaseInElementRender from "./base/base-in-element-render";
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

import BaseRenderReactComponent from "./base/base-render-react-component";


export default class RPaperMenuItemComponent extends BaseRenderReactComponent {
  constructor() {
    super(...arguments);
    this.componentType = MENU_ITEM.COMPONENT_TYPE;
    this.loadPropObject(MenuItemPropObj);
    this.reactElement = ReactMenuItem;
  }
}


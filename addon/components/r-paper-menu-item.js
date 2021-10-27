import {ReactMenuItem} from '../react-component-lib/react-menu-item'
import { MENU_ITEM } from "../constants/menu-item";
import { MenuItemPropObj } from '../prop-files/menu-item-props';
import BaseInElementRender from "./base/base-in-element-render";
import { inject as service } from '@ember/service';
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

@mayBelongToReactGroup
export default class RPaperMenuItemComponent extends BaseInElementRender {
  @service reactGroupList;

  constructor() {
    super(...arguments);
    this.componentType = MENU_ITEM.COMPONENT_TYPE;
    this.loadPropObject(MenuItemPropObj);
    this.reactElement = ReactMenuItem;
  }

  saveList() {
    //will only work if this is part of a React Group
    //this.reactGroupList.save(this.groupIdentifier, this.args.value, this.childrenFragment);
    this.reactGroupList.save(this.groupIdentifier, this.args.value, this.moveLocation);
  }
}


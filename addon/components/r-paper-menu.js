import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactMenu } from '../react-component-lib/react-menu';
import { protectChildrenFromReactDestruction } from "../decorators/protect-children-from-react-destruction";
import { MenuPropObj } from '../prop-files/menu-props';
import BaseInElementRender from "./base/base-in-element-render";

@protectChildrenFromReactDestruction
export default class RPaperMenuComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU;
    this.loadPropObject(MenuPropObj);
    this.reactElement = ReactMenu;
  }

  initializeProps() {
    super.initializeProps();
    this.args.triggerId && this.setAnchorElByTriggerId();
  }

  setAnchorElByTriggerId() {
    this.propsToPass.anchorEl = document.getElementById(this.args.triggerId);
  }

  renderChildren() {
    //children are rendered when menu is displayed
  }
}







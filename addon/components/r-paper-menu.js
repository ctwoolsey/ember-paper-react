import { MENU } from "../constants/menu";
import { ReactMenu } from '../react-component-lib/react-menu';
import { protectChildrenFromReactDestruction } from "../decorators/protect-children-from-react-destruction";
import { MenuPropObj } from '../prop-files/menu-props';
import BaseInElementRender from "./base/base-in-element-render";

@protectChildrenFromReactDestruction
export default class RPaperMenuComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = MENU.COMPONENT_TYPE;
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
}







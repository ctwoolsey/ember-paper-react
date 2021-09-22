import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactMenu } from '../react-component-lib/react-menu';
import { reactPresentationCapable } from "../decorators/react-presentation-capable";
import { MenuPropObj } from '../react-component-lib/utility/props/menu-props';
import BaseInElementRender from "./base/base-in-element-render";

@reactPresentationCapable
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
    this.props.anchorEl = document.getElementById(this.args.triggerId);
  }

  renderChildren() {
    //children are rendered when menu is displayed
  }
}







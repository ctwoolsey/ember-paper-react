import { MENU } from "../constants/menu";
import { ReactMenu } from '../react-component-lib/react-menu';
import { protectChildrenFromReactDestruction } from "../decorators/protect-children-from-react-destruction";
import { MenuPropObj } from '../prop-files/menu-props';
import BaseInElementRender from "./base/base-in-element-render";
import { action } from '@ember/object';

@protectChildrenFromReactDestruction
export default class RPaperMenuComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = MENU.COMPONENT_TYPE;
    this.loadPropObject(MenuPropObj);
    this.reactElement = ReactMenu;
  }

  setAnchorElByTriggerId() {
    this.propsToPass.anchorEl = document.getElementById(this.args.triggerId);
  }

  @action
  createReactComponent() {
    /*
      if the element is triggered by an id, the react component
      with that id may not be on the dom yet, so wait for it before creating the menu.
     */
    if (this.args.triggerId) {
      if (document.getElementById(this.args.triggerId)) {
        this.setAnchorElByTriggerId();
        super.createReactComponent();
      } else {
        setTimeout(this.createReactComponent, 25);
      }
    } else {
      super.createReactComponent();
    }
  }
}







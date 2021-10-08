import { COMPONENT_TYPES } from '../constants/constants';
import { ReactDrawer } from '../react-component-lib/react-drawer';
import { DrawerPropObj } from '../prop-files/drawer-props';
import { renderLater } from "../decorators/render-later";
import BaseInElementRender from "./base/base-in-element-render";

@renderLater
export default class RPaperDrawerComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DRAWER;
    this.loadPropObject(DrawerPropObj);
    this.reactElement = ReactDrawer;
  }

  renderLater() {
    if (this.args.variant === 'persistent' ||
      this.args.variant === 'permanent' ||
      (this.args.ModalProps && this.args.ModalProps.keepMounted)) {
      if (this.childrenFragment.childNodes.length > 0) {
        this.moveLocation = this.reactRef.current.componentRef.current.getElementsByClassName('MuiDrawer-paper')[0];
      }
    }
  }
}






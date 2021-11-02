import { DRAWER } from "../constants/drawer";
import { ReactDrawer } from '../react-component-lib/react-drawer';
import { DrawerPropObj } from '../prop-files/drawer-props';
import { renderLater } from "../decorators/render-later";
import BaseInElementRender from "./base/base-in-element-render";

@renderLater
export default class RPaperDrawerComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = DRAWER.COMPONENT_TYPE;
    this.loadPropObject(DrawerPropObj);
    this.reactElement = ReactDrawer;
  }

  renderLater() {
    if (this.args.variant === DRAWER.PERSISTENT ||
      this.args.variant === DRAWER.PERMANENT ||
      (this.args.ModalProps && this.args.ModalProps[DRAWER.KEEP_MOUNTED])) {
      if (this.childrenFragment.childNodes.length > 0) {
        this.moveLocation = this.reactRef.current.componentRef.current.getElementsByClassName(DRAWER.INSERT_CLASS)[0];
      }
    }
  }
}






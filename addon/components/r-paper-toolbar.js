import {ReactToolbar} from '../react-component-lib/react-toolbar'
import { TOOLBAR } from "../constants/toolbar";
import { ToolbarPropObj } from '../prop-files/toolbar-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperToolbarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = TOOLBAR.COMPONENT_TYPE;
    this.loadPropObject(ToolbarPropObj);
    this.reactElement = ReactToolbar;
  }
}

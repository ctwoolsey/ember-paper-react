import {ReactToolbar} from '../react-component-lib/react-toolbar'
import { COMPONENT_TYPES } from '../constants/constants';
import { ToolbarPropObj } from '../prop-files/toolbar-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperToolbarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TOOLBAR;
    this.loadPropObject(ToolbarPropObj);
    this.reactElement = ReactToolbar;
  }
}

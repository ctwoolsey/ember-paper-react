import {ReactAppbar} from '../react-component-lib/react-appbar'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import {AppbarPropObj} from '../prop-files/appbar-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperAppbarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.APPBAR;
    this.loadPropObject(AppbarPropObj);
    this.reactElement = ReactAppbar;
  }
}


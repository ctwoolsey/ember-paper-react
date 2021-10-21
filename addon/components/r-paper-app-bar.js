import {ReactAppBar} from '../react-component-lib/react-app-bar'
import { COMPONENT_TYPES } from '../constants/constants';
import {AppBarPropObj} from '../prop-files/app-bar-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperAppBarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.APPBAR;
    this.loadPropObject(AppBarPropObj);
    this.reactElement = ReactAppBar;
  }
}


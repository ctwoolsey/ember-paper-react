import {ReactAppBar} from '../react-component-lib/react-app-bar'
import { APP_BAR } from "../constants/app-bar";
import {AppBarPropObj} from '../prop-files/app-bar-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperAppBarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = APP_BAR.COMPONENT_TYPE;
    this.loadPropObject(AppBarPropObj);
    this.reactElement = ReactAppBar;
  }
}


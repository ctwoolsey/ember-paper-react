import {ReactFab} from '../react-component-lib/react-fab'
import { FAB } from "../constants/fab";
import {FabPropObj} from '../prop-files/fab-props';
import BaseInElementRender from "./base/base-in-element-render";
import { overrideHref } from "../decorators/override-href";

@overrideHref
export default class RPaperFabComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = FAB.COMPONENT_TYPE;
    this.loadPropObject(FabPropObj);
    this.reactElement = ReactFab;
  }
}

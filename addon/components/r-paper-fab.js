import {ReactFab} from '../react-component-lib/react-fab'
import { COMPONENT_TYPES } from '../constants/constants';
import {FabPropObj} from '../prop-files/fab-props';
import BaseInElementRender from "./base/base-in-element-render";
import { overrideHref } from "../decorators/override-href";

@overrideHref
export default class RPaperFabComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.FAB;
    this.loadPropObject(FabPropObj);
    this.reactElement = ReactFab;
  }
}

import { ReactDialogContent } from '../react-component-lib/dialog-related/react-dialog-content';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { DialogContentPropObj } from '../react-component-lib/utility/props/dialog-content-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogContentComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_CONTENT;
    this.loadPropObject(DialogContentPropObj);
    this.reactElement = ReactDialogContent;
  }
}


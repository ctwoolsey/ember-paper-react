import { ReactDialogContent } from '../react-component-lib/dialog-related/react-dialog-content';
import { DIALOG_CONTENT } from "../constants/dialog-content";
import { DialogContentPropObj } from '../prop-files/dialog-content-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogContentComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = DIALOG_CONTENT.COMPONENT_TYPE;
    this.loadPropObject(DialogContentPropObj);
    this.reactElement = ReactDialogContent;
  }
}


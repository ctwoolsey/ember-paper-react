import { ReactDialogContentText } from '../react-component-lib/dialog-related/react-dialog-content-text';
import { DIALOG_CONTENT_TEXT } from "../constants/dialog-content-text";
import { DialogContentTextPropObj } from '../prop-files/dialog-content-text-props';
import BaseInElementRender from "./base/base-in-element-render";


export default class RPaperDialogContentTextComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = DIALOG_CONTENT_TEXT.COMPONENT_TYPE;
    this.loadPropObject(DialogContentTextPropObj);
    this.reactElement = ReactDialogContentText;
  }
}



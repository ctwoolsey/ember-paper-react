import { ReactDialogContentText } from '../react-component-lib/dialog-related/react-dialog-content-text';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { DialogContentTextPropObj } from '../prop-files/dialog-content-text-props';
import BaseInElementRender from "./base/base-in-element-render";


export default class RPaperDialogContentTextComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_CONTENT_TEXT;
    this.loadPropObject(DialogContentTextPropObj);
    this.reactElement = ReactDialogContentText;
  }
}



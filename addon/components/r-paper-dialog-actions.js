import { ReactDialogActions } from '../react-component-lib/dialog-related/react-dialog-actions';
import { DIALOG_ACTIONS } from "../constants/dialog-actions";
import { DialogActionsPropObj } from '../prop-files/dialog-actions-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogActionsComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = DIALOG_ACTIONS.COMPONENT_TYPE;
    this.loadPropObject(DialogActionsPropObj);
    this.reactElement = ReactDialogActions;
  }
}


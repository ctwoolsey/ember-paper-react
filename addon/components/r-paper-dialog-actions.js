import { ReactDialogActions } from '../react-component-lib/dialog-related/react-dialog-actions';
import { COMPONENT_TYPES } from '../constants/constants';
import { DialogActionsPropObj } from '../prop-files/dialog-actions-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogActionsComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_ACTIONS;
    this.loadPropObject(DialogActionsPropObj);
    this.reactElement = ReactDialogActions;
  }
}


import { DIALOG } from "../constants/dialog";
import { ReactDialog } from '../react-component-lib/dialog-related/react-dialog';
import { DialogPropObj } from '../prop-files/dialog-props';
import BaseInElementRender from "./base/base-in-element-render";
import { renderLater } from "../decorators/render-later";

@renderLater
export default class RPaperDialogComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = DIALOG.COMPONENT_TYPE;
    this.loadPropObject(DialogPropObj);
    this.reactElement = ReactDialog;
  }
}





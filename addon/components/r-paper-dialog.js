import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactDialog } from '../react-component-lib/dialog-related/react-dialog';
import { DialogPropObj } from '../react-component-lib/utility/props/dialog-props';
import BaseInElementRender from "./base/base-in-element-render";
import { reactPresentationCapable } from "../decorators/react-presentation-capable";
import { renderLater } from "../decorators/render-later";

@reactPresentationCapable
@renderLater
export default class RPaperDialogComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG;
    this.loadPropObject(DialogPropObj);
    this.reactElement = ReactDialog;
  }
}





import { ReactDialogTitle } from '../react-component-lib/dialog-related/react-dialog-title';
import { COMPONENT_TYPES } from '../constants/constants';
import { DialogTitlePropObj } from '../prop-files/dialog-title-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogTitleComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_TITLE;
    this.loadPropObject(DialogTitlePropObj);
    this.reactElement = ReactDialogTitle;
  }
}



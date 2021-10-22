import { ReactDialogTitle } from '../react-component-lib/dialog-related/react-dialog-title';
import { DIALOG_TITLE } from "../constants/dialog-title";
import { DialogTitlePropObj } from '../prop-files/dialog-title-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogTitleComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = DIALOG_TITLE.COMPONENT_TYPE;
    this.loadPropObject(DialogTitlePropObj);
    this.reactElement = ReactDialogTitle;
  }
}



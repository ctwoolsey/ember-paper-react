import { ReactDialogTitle } from '../react-component-lib/dialog-related/react-dialog-title';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { DialogTitlePropObj } from '../react-component-lib/utility/props/dialog-title-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperDialogTitleComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_TITLE;
    this.loadPropObject(DialogTitlePropObj);
    this.reactElement = ReactDialogTitle;
  }
}



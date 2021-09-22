import { ReactDialogTitle } from '../react-component-lib/dialog-related/react-dialog-title';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { DialogTitlePropObj } from '../react-component-lib/utility/props/dialog-title-props';

export default class RPaperDialogTitleComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_TITLE;
    this.loadPropObject(DialogTitlePropObj);
    this.reactElement = ReactDialogTitle;
  }
}



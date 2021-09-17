import { ReactDialogContentText } from '../react-component-lib/dialog-related/react-dialog-content-text';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  DialogContentTextProps,
  DialogContentTextStateProps,
  DialogContentTextPropsNotForComponent,
  DialogContentTextStatePropsNotForComponent
} from '../react-component-lib/utility/props/dialog-content-text-props';


export default class RPaperDialogContentTextComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_CONTENT_TEXT;
    this.props = DialogContentTextProps();
    this.stateProps = DialogContentTextStateProps();
    this.notForComponentProps = DialogContentTextPropsNotForComponent();
    this.notForComponentStateProps = DialogContentTextStatePropsNotForComponent();
    this.reactElement = ReactDialogContentText;
  }
}



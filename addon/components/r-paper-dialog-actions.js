import { ReactDialogActions } from '../react-component-lib/dialog-related/react-dialog-actions';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  DialogActionsProps,
  DialogActionsStateProps,
  DialogActionsPropsNotForComponent,
  DialogActionsStatePropsNotForComponent
} from '../react-component-lib/utility/props/dialog-actions-props';

export default class RPaperDialogActionsComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_ACTIONS;
    this.props = DialogActionsProps();
    this.stateProps = DialogActionsStateProps();
    this.notForComponentProps = DialogActionsPropsNotForComponent();
    this.notForComponentStateProps = DialogActionsStatePropsNotForComponent();
    this.reactElement = ReactDialogActions;
  }
}


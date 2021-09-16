import { ReactDialogContent } from '../react-component-lib/dialog-related/react-dialog-content';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  DialogContentProps,
  DialogContentStateProps,
  DialogContentPropsNotForComponent
} from '../react-component-lib/utility/props/dialog-content-props';

export default class RPaperDialogContentComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_CONTENT;
    this.props = DialogContentProps();
    this.stateProps = DialogContentStateProps();
    this.notForComponentProps = DialogContentPropsNotForComponent();
    this.reactElement = ReactDialogContent;
    this.renderElement = this.renderElement.bind(this);
  }
}


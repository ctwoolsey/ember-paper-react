import { ReactDialogTitle } from '../react-component-lib/dialog-related/react-dialog-title';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  DialogTitleProps,
  DialogTitleStateProps,
  DialogTitlePropsNotForComponent,
  DialogTitleStatePropsNotForComponent
} from '../react-component-lib/utility/props/dialog-title-props';

export default class RPaperDialogTitleComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG_TITLE;
    this.props = DialogTitleProps();
    this.stateProps = DialogTitleStateProps();
    this.notForComponentProps = DialogTitlePropsNotForComponent();
    this.notForComponentStateProps = DialogTitleStatePropsNotForComponent();
    this.reactElement = ReactDialogTitle;
  }
}



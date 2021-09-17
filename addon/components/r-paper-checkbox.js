import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CheckboxProps, CheckboxStateProps, CheckboxPropsNotForComponent, CheckboxStatePropsNotForComponent
} from '../react-component-lib/utility/props/checkbox-props';
import {
  FormControlLabelProps, FormControlLabelStateProps, FormControlLabelPropsNotForComponent, FormControlLabelStatePropsNotForComponent
} from '../react-component-lib/utility/props/form-control-label-props';
import { ReactCheckbox } from '../react-component-lib/react-checkbox';

export default class RPaperCheckbox extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHECKBOX;
    this.props = Object.assign({}, CheckboxProps(), FormControlLabelProps());
    this.stateProps = Object.assign({}, CheckboxStateProps(), FormControlLabelStateProps());
    this.notForComponentProps = Object.assign({}, CheckboxPropsNotForComponent(), FormControlLabelPropsNotForComponent());
    this.notForComponentStateProps = Object.assign({}, CheckboxStatePropsNotForComponent(), FormControlLabelStatePropsNotForComponent());
    this.reactElement = ReactCheckbox;
  }

  initializeProps() {
    super.initializeProps();
    this.props.checkedIcon = this.createIcon(this.args.checkedIcon);
    this.props.indeterminateIcon = this.createIcon(this.args.indeterminateIcon);
  }
}

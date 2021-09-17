import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  SwitchProps,
  SwitchStateProps,
  SwitchPropsNotForComponent,
  SwitchStatePropsNotForComponent
} from '../react-component-lib/utility/props/switch-props';
import {
  FormControlLabelProps, FormControlLabelStateProps, FormControlLabelPropsNotForComponent, FormControlLabelStatePropsNotForComponent
} from '../react-component-lib/utility/props/form-control-label-props';
import { ReactSwitch } from '../react-component-lib/react-switch';

export default class RPaperSwitchComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.SWITCH;
    this.props = Object.assign({}, SwitchProps(), FormControlLabelProps());
    this.stateProps = Object.assign({}, SwitchStateProps(), FormControlLabelStateProps());
    this.notForComponentProps = Object.assign({}, SwitchPropsNotForComponent(), FormControlLabelPropsNotForComponent());
    this.notForComponentStateProps = Object.assign({}, SwitchStatePropsNotForComponent(), FormControlLabelStatePropsNotForComponent());
    this.reactElement = ReactSwitch;
  }

  initializeProps() {
    super.initializeProps();
    this.props.checkedIcon = this.createIcon(this.args.checkedIcon);
    this.props.icon = this.createIcon(this.args.icon);
  }
}

import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { SwitchPropObj } from '../react-component-lib/utility/props/switch-props';
import {
  FormControlLabelPropObj
} from '../react-component-lib/utility/props/form-control-label-props';
import { ReactSwitch } from '../react-component-lib/react-switch';

export default class RPaperSwitchComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.SWITCH;
    this.props = Object.assign({}, SwitchPropObj.props(), FormControlLabelPropObj.props());
    this.stateProps = Object.assign({}, SwitchPropObj.stateProps(), FormControlLabelPropObj.stateProps());
    this.propsNotForComponent = Object.assign({}, SwitchPropObj.propsNotForComponent(), FormControlLabelPropObj.propsNotForComponent());
    this.statefulPropsNotForComponent = Object.assign({}, SwitchPropObj.statefulPropsNotForComponent(), FormControlLabelPropObj.statefulPropsNotForComponent());
    this.reactElement = ReactSwitch;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.checkedIcon = this.createIcon(this.args.checkedIcon);
    this.propsToPass.icon = this.createIcon(this.args.icon);
  }
}

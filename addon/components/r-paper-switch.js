import { SWITCH } from "../constants/switch";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { SwitchPropObj } from '../prop-files/switch-props';
import { FormControlLabelPropObj } from '../prop-files/form-control-label-props';
import { ReactSwitch } from '../react-component-lib/react-switch';

export default class RPaperSwitchComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = SWITCH.COMPONENT_TYPE;
    this.loadPropObject(SwitchPropObj, FormControlLabelPropObj);
    this.reactElement = ReactSwitch;
  }
}

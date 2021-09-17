import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import Switch from '@mui/material/Switch';
import {
  SwitchProps,
  SwitchStateProps,
  SwitchPropsNotForComponent,
  SwitchStatePropsNotForComponent
} from './utility/props/switch-props';

export class ReactSwitch extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Switch;
    this.initialize(SwitchProps(), SwitchPropsNotForComponent(), SwitchStateProps(), SwitchStatePropsNotForComponent());
  }
}

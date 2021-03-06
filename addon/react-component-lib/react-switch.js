import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import Switch from '@mui/material/Switch';
import {SwitchPropObj} from '../prop-files/switch-props';

export class ReactSwitch extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Switch;
    this.initialize(SwitchPropObj);
  }
}

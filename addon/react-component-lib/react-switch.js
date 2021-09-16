import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import Switch from '@material-ui/core/Switch';

export class ReactSwitch extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.controlType = Switch;
  }
}

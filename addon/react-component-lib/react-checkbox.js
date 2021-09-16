import Checkbox from '@material-ui/core/Checkbox';
import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';

export class ReactCheckbox extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.controlType = Checkbox;
  }
}

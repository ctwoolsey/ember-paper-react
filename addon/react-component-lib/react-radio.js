import { ReactLabeledCheckRadioSwitch } from "./react-labeled-check-radio-switch";
import Radio from '@material-ui/core/Radio';

export class ReactRadio extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.controlType = Radio;
  }
}

import { ReactCheckRadioSwitch } from "./react-check-radio-switch";
import Radio from '@material-ui/core/Radio';

/* Does not currently implement:
    checkedIcon, icon, indeterminateIcon
*/
export class ReactRadio extends ReactCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.controlType = Radio;
  }
}

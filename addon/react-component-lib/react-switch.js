import { ReactCheckRadioSwitch } from "./react-check-radio-switch";
import Switch from '@material-ui/core/Switch';

/* Does not currently implement:
    checkedIcon, icon, indeterminateIcon
*/
export class ReactSwitch extends ReactCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.controlType = Switch;
  }
}

import Checkbox from '@mui/material/Checkbox';
import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import {CheckboxPropObj} from './utility/props/checkbox-props';

export class ReactCheckbox extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Checkbox;
    this.initialize(CheckboxPropObj);
  }
}

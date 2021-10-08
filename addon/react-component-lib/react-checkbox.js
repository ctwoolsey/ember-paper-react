import Checkbox from '@mui/material/Checkbox';
import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import {CheckboxPropObj} from '../prop-files/checkbox-props';

export class ReactCheckbox extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Checkbox;
    this.initialize(CheckboxPropObj);
  }
}

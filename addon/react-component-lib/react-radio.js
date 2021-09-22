import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import Radio from '@mui/material/Radio';
import {RadioPropObj} from './utility/props/radio-props';

export class ReactRadio extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Radio;
    this.initialize(RadioPropObj);
  }
}

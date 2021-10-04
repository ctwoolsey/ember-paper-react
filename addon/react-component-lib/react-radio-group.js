import RadioGroup from '@mui/material/RadioGroup';
import { ReactBase } from './base/react-base';
import { RadioGroupPropObj } from './utility/props/radio-group-props';

export class ReactRadioGroup extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = RadioGroup;
    this.initialize(RadioGroupPropObj);
  }
}

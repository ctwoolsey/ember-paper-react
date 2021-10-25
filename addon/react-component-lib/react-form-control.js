import FormControl from '@mui/material/FormControl';
import { ReactBase } from './base/react-base';
import { FormControlPropObj } from '../prop-files/form-control-props';

export class ReactFormControl extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = FormControl;
    this.initialize(FormControlPropObj);
  }
}

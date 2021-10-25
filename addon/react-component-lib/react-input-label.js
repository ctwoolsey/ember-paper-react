import InputLabel from '@mui/material/InputLabel';
import { ReactBase } from './base/react-base';
import { InputLabelPropObj } from '../prop-files/input-label-props';

export class ReactInputLabel extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = InputLabel;
    this.initialize(InputLabelPropObj);
  }
}

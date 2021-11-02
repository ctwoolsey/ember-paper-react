import Backdrop from '@mui/material/Backdrop';
import { ReactBase } from './base/react-base';
import { BackdropPropObj } from '../prop-files/backdrop-props';

export class ReactBackdrop extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Backdrop;
    this.initialize(BackdropPropObj);
  }
}

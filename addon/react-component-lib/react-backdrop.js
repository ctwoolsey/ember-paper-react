import Backdrop from '@mui/material/Backdrop';
import { ReactBase } from './base/react-base';
import { BackdropStateProps, BackdropPropsNotForComponent } from './utility/props/backdrop-props';

export class ReactBackdrop extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Backdrop;
    this.initialize(BackdropStateProps(), BackdropPropsNotForComponent());
  }
}

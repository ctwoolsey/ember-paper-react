import AppBar from '@mui/material/AppBar';
import { ReactBase } from './base/react-base';
import { AppBarPropObj } from '../prop-files/app-bar-props';

export class ReactAppBar extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = AppBar;
    this.initialize(AppBarPropObj);
  }
}

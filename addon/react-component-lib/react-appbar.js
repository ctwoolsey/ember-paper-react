import Appbar from '@mui/material/AppBar';
import { ReactBase } from './base/react-base';
import { AppbarStateProps, AppbarPropsNotForComponent } from './utility/props/appbar-props';

export class ReactAppbar extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Appbar;
    this.initialize(AppbarStateProps(), AppbarPropsNotForComponent());
  }
}

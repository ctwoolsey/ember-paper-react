import Menu from '@mui/material/Menu';
import { ReactBase } from './base/react-base';
import { DialogPropsNotForComponent, DialogStateProps, DialogStatePropsNotForComponent } from './utility/props/dialog-props';

export class ReactMenu extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Menu;
    this.initialize(DialogStateProps(), DialogPropsNotForComponent(), DialogStatePropsNotForComponent());
  }
}

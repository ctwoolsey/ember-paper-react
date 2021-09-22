import Menu from '@mui/material/Menu';
import { ReactBase } from './base/react-base';
import { DialogPropObj } from './utility/props/dialog-props';

export class ReactMenu extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Menu;
    this.initialize(DialogPropObj);
  }
}

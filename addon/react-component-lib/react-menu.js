import Menu from '@mui/material/Menu';
import { ReactBase } from './base/react-base';
import { MenuPropObj } from "./utility/props/menu-props";

export class ReactMenu extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Menu;
    this.initialize(MenuPropObj);
  }
}

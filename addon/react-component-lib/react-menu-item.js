import MenuItem from '@mui/material/MenuItem';
import { ReactBase } from './base/react-base';
import { MenuItemPropObj } from '../prop-files/menu-item-props';

export class ReactMenuItem extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = MenuItem;
    this.initialize(MenuItemPropObj);
  }
}

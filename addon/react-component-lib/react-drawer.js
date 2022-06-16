import { ReactBase } from './base/react-base';
import { DrawerPropObj } from '../prop-files/drawer-props';
import Drawer from '@mui/material/Drawer';

export class ReactDrawer extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Drawer;
    this.initialize(DrawerPropObj);
  }

}

import MenuItem from '@mui/material/MenuItem';
import { ReactBase } from './base/react-base';
import { MenuItemPropObj } from '../prop-files/menu-item-props';
import { reactMayBelongToReactGroup } from "../decorators/for-react/react-may-belong-to-react-group";

@reactMayBelongToReactGroup
export class ReactMenuItem extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = MenuItem;
    this.initialize(MenuItemPropObj);
  }
}

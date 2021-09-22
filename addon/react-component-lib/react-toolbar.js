import Toolbar from '@mui/material/Toolbar';
import { ToolbarPropObj } from './utility/props/toolbar-props';
import { ReactBase } from './base/react-base';

export class ReactToolbar extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Toolbar;
    this.initialize(ToolbarPropObj);
  }
}

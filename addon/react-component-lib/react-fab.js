import Fab from '@mui/material/Fab';
import { ReactBase } from './base/react-base';
import { FabPropObj } from '../prop-files/fab-props';

export class ReactFab extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Fab;
    this.initialize(FabPropObj);
  }
}

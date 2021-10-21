import IconButton from '@mui/material/IconButton';
import { ReactBase } from './base/react-base';
import { IconButtonPropObj } from '../prop-files/icon-button-props';

export class ReactIconButton extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = IconButton;
    this.initialize(IconButtonPropObj);
  }
}

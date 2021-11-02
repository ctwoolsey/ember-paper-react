import SvgIcon from '@mui/material/SvgIcon'
import { ReactBase } from './base/react-base';
import { SvgIconPropObj } from '../prop-files/svg-icon-props';

export class ReactSvgIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = SvgIcon;
    this.initialize(SvgIconPropObj);
  }

  childrenToRender() {
    return (
      <path d='' />
    );
  }
}

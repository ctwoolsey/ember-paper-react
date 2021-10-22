import Badge from '@mui/material/Badge';
import { ReactBase } from './base/react-base';
import { BadgePropObj } from '../prop-files/badge-props';

export class ReactBadge extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Badge;
    this.initialize(BadgePropObj);
  }
}

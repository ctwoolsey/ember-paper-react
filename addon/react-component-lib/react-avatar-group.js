import AvatarGroup from '@mui/material/AvatarGroup';
import { ReactBase } from './base/react-base';
import { AvatarGroupPropObj } from '../prop-files/avatar-group-props';

export class ReactAvatarGroup extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = AvatarGroup;
    this.initialize(AvatarGroupPropObj);
  }
}

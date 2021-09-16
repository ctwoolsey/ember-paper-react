import Avatar from '@mui/material/Avatar';
import { AvatarStateProps, AvatarPropsNotForComponent } from './utility/props/avatar-props';
import { ReactBase } from './base/react-base';

export class ReactAvatar extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Avatar;
    this.initialize(AvatarStateProps(), AvatarPropsNotForComponent());
  }
}

import AvatarGroup from '@mui/material/AvatarGroup';
import { ReactBase } from './base/react-base';
import { AvatarGroupStateProps, AvatarGroupPropsNotForComponent, AvatarGroupStatePropsNotForComponent } from './utility/props/avatar-group-props';

export class ReactAvatarGroup extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = AvatarGroup;
    this.initialize(AvatarGroupStateProps(), AvatarGroupPropsNotForComponent(), AvatarGroupStatePropsNotForComponent());

  }
}

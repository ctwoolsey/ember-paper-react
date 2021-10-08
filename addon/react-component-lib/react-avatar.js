import Avatar from '@mui/material/Avatar';
import { AvatarPropObj } from '../prop-files/avatar-props';
import { ReactBase } from './base/react-base';
import { reactMayBelongToReactGroup } from "./react-decorators/react-may-belong-to-react-group";

@reactMayBelongToReactGroup
export class ReactAvatar extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Avatar;
    this.initialize(AvatarPropObj);
  }
}

import AvatarGroup from '@material-ui/core/AvatarGroup';
import { ReactBase } from "./base/react-base";
import { AvatarGroupStateProps } from "./utility/props/avatar-group-props";

export class ReactAvatarGroup extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = AvatarGroup;
    this.initialize(AvatarGroupStateProps());

  }
}

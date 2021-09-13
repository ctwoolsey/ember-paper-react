import {ReactAvatar} from "../react-component-lib/react-avatar"
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import { AvatarProps, AvatarStateProps } from "../react-component-lib/utility/props/avatar-props";
import BaseEmberPaperReact from "./base/base-ember-paper-react";

export default class RPaperAvatarComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AVATAR;
    this.props = AvatarProps();
    this.stateProps = AvatarStateProps();
    this.reactElement = ReactAvatar;
  }
}


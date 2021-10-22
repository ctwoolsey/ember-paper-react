import {ReactAvatar} from '../react-component-lib/react-avatar'
import { AVATAR } from "../constants/avatar";
import { AvatarPropObj } from '../prop-files/avatar-props';
import BaseInElementRender from "./base/base-in-element-render";
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

@mayBelongToReactGroup
export default class RPaperAvatarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = AVATAR.COMPONENT_TYPE;
    this.loadPropObject(AvatarPropObj);
    this.reactElement = ReactAvatar;
  }
}


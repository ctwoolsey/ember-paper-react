import {ReactAvatar} from '../react-component-lib/react-avatar'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { AvatarPropObj } from '../prop-files/avatar-props';
import BaseInElementRender from "./base/base-in-element-render";
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

@mayBelongToReactGroup
export default class RPaperAvatarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AVATAR;
    this.loadPropObject(AvatarPropObj);
    this.reactElement = ReactAvatar;
  }
}


import {ReactAvatarGroup} from '../react-component-lib/react-avatar-group'
import { AVATAR_GROUP } from "../constants/avatar-group";
import { AvatarGroupPropObj } from '../prop-files/avatar-group-props';
import { reactGroup } from "../decorators/react-group";
import BaseEmberPaperReact from "./base/base-ember-paper-react";

@reactGroup
export default class RPaperAvatarGroupComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = AVATAR_GROUP.COMPONENT_TYPE;
    this.loadPropObject(AvatarGroupPropObj);
    this.reactElement = ReactAvatarGroup;
  }
}


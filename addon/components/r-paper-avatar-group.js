import {ReactAvatarGroup} from '../react-component-lib/react-avatar-group'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { AvatarGroupPropObj } from '../prop-files/avatar-group-props';
import { reactGroup } from "../decorators/react-group";
import BaseEmberPaperReact from "./base/base-ember-paper-react";

@reactGroup
export default class RPaperAvatarGroupComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AVATAR_GROUP;
    this.loadPropObject(AvatarGroupPropObj);
    this.reactElement = ReactAvatarGroup;
  }
}


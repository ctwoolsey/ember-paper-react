import {ReactChip} from '../react-component-lib/react-chip'
import { CHIP } from "../constants/chip";
import { AVATAR } from "../constants/avatar";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { ChipPropObj } from '../prop-files/chip-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";

@hasAttributeNodeChildren
export default class RPaperChip extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = CHIP.COMPONENT_TYPE;
    this.loadPropObject(ChipPropObj);
    this.reactElement = ReactChip;
  }

  get avatar() {
    return CHIP.ATTRIBUTE_COMPONENT.AVATAR;
  }

  onRenderAttributeNodeChildren() {
    if (!this.args.icon) {  //can't have icon and avatar in a chip so icon will take precedence
      const avatarHolder = this.reactRef.current.componentRef.current.getElementsByClassName(AVATAR.ROOT)[0];
      const moveMethod = this.getAttributeMoveMethod(CHIP.ATTRIBUTE_COMPONENT.AVATAR);
      if (moveMethod) {
        moveMethod(avatarHolder);
      } else {
        //if no icon and no avatar then the blank avatar should be removed.
        avatarHolder.remove();
      }
    }
  }
}

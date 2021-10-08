import {ReactChip} from '../react-component-lib/react-chip'
import { COMPONENT_TYPES } from '../constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { ChipPropObj } from '../prop-files/chip-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";

@hasAttributeNodeChildren
export default class RPaperChip extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHIP;
    this.loadPropObject(ChipPropObj);
    this.reactElement = ReactChip;
  }

  onRenderAttributeNodeChildren() {
    if (!this.args.icon) {  //can't have icon and avatar in a chip so icon will take precedence
      const avatarHolder = this.reactRef.current.componentRef.current.getElementsByClassName('MuiAvatar-root')[0];
      const moveMethod = this.getAttributeMoveMethod('avatar');
      if (moveMethod) {
        moveMethod(avatarHolder);
      } else {
        //if no icon and no avatar then the blank avatar should be removed.
        avatarHolder.remove();
      }
    }
  }
}

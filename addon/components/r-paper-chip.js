import {ReactChip} from '../react-component-lib/react-chip'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { ChipPropObj } from '../react-component-lib/utility/props/chip-props';
import { hasAttributeChildren } from "../decorators/has-attribute-children";

@hasAttributeChildren
export default class RPaperChip extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHIP;
    this.loadPropObject(ChipPropObj);
    this.reactElement = ReactChip;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.icon = this.createIcon(this.args.icon);
    this.propsToPass.deleteIcon = this.createIcon(this.args.deleteIcon);
  }

  onRenderAdditionalItems() {
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

import {ReactChip} from '../react-component-lib/react-chip'
import React from 'react';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactAvatar } from '../react-component-lib/react-avatar';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { ChipPropObj } from '../react-component-lib/utility/props/chip-props';

export default class RPaperChip extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHIP;
    this.loadPropObject(ChipPropObj);
    this.reactElement = ReactChip;
  }

  initializeProps() {
    super.initializeProps();
    this.props.icon = this.createIcon(this.args.icon);
    this.props.avatar = this.args.avatar ? <ReactAvatar {...this.args.avatar}/> : null;
    this.props.deleteIcon = this.createIcon(this.args.deleteIcon);
  }
}

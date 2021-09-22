import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactBackdrop } from '../react-component-lib/react-backdrop';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { BackdropPropObj } from '../react-component-lib/utility/props/backdrop-props';

export default class RPaperBackdropComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BACKDROP;
    this.loadPropObject(BackdropPropObj);
    this.reactElement = ReactBackdrop;
  }
}








import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { RadioGroupPropObj } from '../prop-files/radio-group-props';
import { ReactRadioGroup } from '../react-component-lib/react-radio-group';
import { reactGroup } from "../decorators/react-group";

@reactGroup
export default class RPaperRadioGroupComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.RADIO_GROUP;
    this.loadPropObject(RadioGroupPropObj);
    this.reactElement = ReactRadioGroup;
  }

}


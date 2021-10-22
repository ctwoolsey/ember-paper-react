import { RADIO_GROUP } from "../constants/radio-group";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { RadioGroupPropObj } from '../prop-files/radio-group-props';
import { ReactRadioGroup } from '../react-component-lib/react-radio-group';
import { reactGroup } from "../decorators/react-group";

@reactGroup
export default class RPaperRadioGroupComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = RADIO_GROUP.COMPONENT_TYPE;
    this.loadPropObject(RadioGroupPropObj);
    this.reactElement = ReactRadioGroup;
  }

}


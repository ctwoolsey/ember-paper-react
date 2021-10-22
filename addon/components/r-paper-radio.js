import { RADIO } from "../constants/radio";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { RadioPropObj } from '../prop-files/radio-props';
import { FormControlLabelPropObj } from '../prop-files/form-control-label-props';
import { ReactRadio } from '../react-component-lib/react-radio';
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

@mayBelongToReactGroup
export default class RPaperRadioComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = RADIO.COMPONENT_TYPE;
    this.loadPropObject(RadioPropObj, FormControlLabelPropObj);
    this.reactElement = ReactRadio;
  }

}

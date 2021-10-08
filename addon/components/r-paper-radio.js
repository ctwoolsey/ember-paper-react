import { COMPONENT_TYPES } from '../constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { RadioPropObj } from '../prop-files/radio-props';
import { FormControlLabelPropObj } from '../prop-files/form-control-label-props';
import { ReactRadio } from '../react-component-lib/react-radio';
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

@mayBelongToReactGroup
export default class RPaperRadioComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.RADIO;
    this.loadPropObject(RadioPropObj, FormControlLabelPropObj);
    this.reactElement = ReactRadio;
  }

}

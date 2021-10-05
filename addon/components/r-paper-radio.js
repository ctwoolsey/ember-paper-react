import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { RadioPropObj } from '../react-component-lib/utility/props/radio-props';
import { FormControlLabelPropObj } from '../react-component-lib/utility/props/form-control-label-props';
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

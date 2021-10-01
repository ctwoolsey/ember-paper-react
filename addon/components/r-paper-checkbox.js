import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CheckboxPropObj } from '../react-component-lib/utility/props/checkbox-props';
import { FormControlLabelPropObj } from '../react-component-lib/utility/props/form-control-label-props';
import { ReactCheckbox } from '../react-component-lib/react-checkbox';

export default class RPaperCheckbox extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHECKBOX;
    this.loadPropObject(CheckboxPropObj, FormControlLabelPropObj);
    this.reactElement = ReactCheckbox;
  }
}

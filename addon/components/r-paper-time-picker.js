import { ReactTimePicker } from '../react-component-lib/react-time-picker'
import { TIME_PICKER } from '../constants/time-picker';
import { TimePickerPropObj } from '../prop-files/time-picker-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { usesErrorValidation } from '../decorators/uses-error-validation';

@usesErrorValidation
export default class RPaperTimePickerComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = TIME_PICKER.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, TimePickerPropObj);
    this.reactElement = ReactTimePicker;
  }

  initializeProps() {
    this.propsToPass.locale = this.propsToPass.locale || null;
    super.initializeProps();
  }
}


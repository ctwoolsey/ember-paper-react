import { ReactDateTimePicker } from '../react-component-lib/react-date-time-picker'
import { DATE_TIME_PICKER } from '../constants/date-time-picker';
import { DateTimePickerPropObj } from '../prop-files/date-time-picker-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { usesLocale } from '../decorators/uses-locale';

@usesErrorValidation
@usesLocale
export default class RPaperDateTimePickerComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = DATE_TIME_PICKER.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, DateTimePickerPropObj);
    this.reactElement = ReactDateTimePicker;
  }
}


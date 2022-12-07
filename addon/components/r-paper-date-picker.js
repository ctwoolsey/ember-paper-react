import { ReactDatePicker } from '../react-component-lib/react-date-picker'
import { DATE_PICKER } from '../constants/date-picker';
import { DatePickerPropObj } from '../prop-files/date-picker-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { usesLocale } from '../decorators/uses-locale';

@usesErrorValidation
@usesLocale
export default class RPaperDatePickerComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = DATE_PICKER.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, DatePickerPropObj);
    this.reactElement = ReactDatePicker;
  }
}


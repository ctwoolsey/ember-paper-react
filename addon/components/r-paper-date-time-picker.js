import { ReactDateTimePicker } from '../react-component-lib/react-date-time-picker'
import { DATE_TIME_PICKER } from '../constants/date-time-picker';
import { DateTimePickerPropObj } from '../prop-files/date-time-picker-props';
import BaseInElementRender from './base/base-in-element-render';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { renderLater } from '../decorators/render-later';

@usesErrorValidation
@renderLater
export default class RPaperDateTimePickerComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = DATE_TIME_PICKER.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, DateTimePickerPropObj);
    this.reactElement = ReactDateTimePicker;
  }

  initializeProps() {
    this.propsToPass.locale = this.propsToPass.locale || null;
    super.initializeProps();
  }
}


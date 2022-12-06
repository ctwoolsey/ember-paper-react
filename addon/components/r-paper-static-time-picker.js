import { ReactStaticTimePicker } from '../react-component-lib/react-static-time-picker'
import { STATIC_TIME_PICKER } from '../constants/static-time-picker';
import { StaticTimePickerPropObj } from '../prop-files/static-time-picker-props';
import BaseInElementRender from './base/base-in-element-render';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { renderLater } from '../decorators/render-later';

@usesErrorValidation
@renderLater
export default class RPaperStaticTimePickerComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = STATIC_TIME_PICKER.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, StaticTimePickerPropObj);
    this.reactElement = ReactStaticTimePicker;
  }

  initializeProps() {
    this.propsToPass.locale = this.propsToPass.locale || null;
    super.initializeProps();
  }
}


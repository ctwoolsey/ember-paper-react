import { ReactStaticTimePicker } from '../react-component-lib/react-static-time-picker'
import { STATIC_TIME_PICKER } from '../constants/static-time-picker';
import { StaticTimePickerPropObj } from '../prop-files/static-time-picker-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { usesLocale } from '../decorators/uses-locale';
import { renderLater } from '../decorators/render-later';

@usesErrorValidation
@renderLater
@usesLocale
export default class RPaperStaticTimePickerComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = STATIC_TIME_PICKER.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, StaticTimePickerPropObj);
    this.reactElement = ReactStaticTimePicker;
  }
}


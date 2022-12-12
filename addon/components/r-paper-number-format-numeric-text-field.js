import { ReactNumberFormatNumericTextField } from '../react-component-lib/react-number-format-numeric-text-field'
import { NUMBER_FORMAT_NUMERIC_TEXT_FIELD } from '../constants/number-format-numeric-text-field';
import { NumberFormatNumericTextFieldPropObj } from '../prop-files/number-format-numeric-text-field-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { changeHandlerValueReturn } from '../decorators/change-handler-value-return';
import { selectTextOrClearOnFocus } from '../decorators/select-text-or-clear-on-focus';
import { service } from '@ember/service';

@usesErrorValidation
@changeHandlerValueReturn
@selectTextOrClearOnFocus
export default class RPaperNumberFormatNumericTextFieldComponent extends BaseEmberPaperReact {
  @service inputMaskTypes;

  constructor() {
    super(...arguments);
    this.componentType = NUMBER_FORMAT_NUMERIC_TEXT_FIELD.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, NumberFormatNumericTextFieldPropObj);
    this.reactElement = ReactNumberFormatNumericTextField;
  }

  initializeProps() {
    super.initializeProps();
    if (this.args.maskName) {
      const mask = this.inputMaskTypes.getNumberFormatNumericType(this.args.maskName);
      Object.assign(this.propsToPass, mask);
    }
  }
}


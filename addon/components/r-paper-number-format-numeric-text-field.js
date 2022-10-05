import { ReactNumberFormatNumericTextField } from '../react-component-lib/react-number-format-numeric-text-field'
import { NUMBER_FORMAT_NUMERIC_TEXT_FIELD } from '../constants/number-format-numeric-text-field';
import { TEXT_FIELD } from '../constants/text-field';
import { NumberFormatNumericTextFieldPropObj } from '../prop-files/number-format-numeric-text-field-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { changeHandlerValueReturn } from '../decorators/change-handler-value-return';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';

@usesErrorValidation
@changeHandlerValueReturn
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
    this.propsToPass.onFocus = this.onFocusHandler;
  }

  @action
  onFocusHandler(event) {
    this.args.onFocus && this.args.onFocus(event);
    later(this, function() {
      this.reactRef.current.componentRef.current.querySelector(`.${TEXT_FIELD.BASE_INPUT_CLASS}`).select();
    }, 50);
  }
}


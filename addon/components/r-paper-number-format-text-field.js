import { ReactNumberFormatTextField } from '../react-component-lib/react-number-format-text-field'
import { NUMBER_FORMAT_TEXT_FIELD } from '../constants/number-format-text-field';
import { NumberFormatTextFieldPropObj } from '../prop-files/number-format-text-field-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { changeHandlerValueReturn } from '../decorators/change-handler-value-return';
import { inject as service } from '@ember/service';

@usesErrorValidation
@changeHandlerValueReturn
export default class RPaperNumberFormatTextFieldComponent extends BaseEmberPaperReact {
  @service inputMaskTypes;

  constructor() {
    super(...arguments);
    this.componentType = NUMBER_FORMAT_TEXT_FIELD.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, NumberFormatTextFieldPropObj);
    this.reactElement = ReactNumberFormatTextField;
  }

  initializeProps() {
    super.initializeProps();
    if (this.args.maskName) {
      const mask = this.inputMaskTypes.getNumberFormatType(this.args.maskName);
      Object.assign(this.propsToPass, mask);
    }
  }
}


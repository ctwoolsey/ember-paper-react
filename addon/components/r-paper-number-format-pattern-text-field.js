import { ReactNumberFormatPatternTextField } from '../react-component-lib/react-number-format-pattern-text-field'
import { NUMBER_FORMAT_PATTERN_TEXT_FIELD } from '../constants/number-format-pattern-text-field';
import { NumberFormatPatternTextFieldPropObj } from '../prop-files/number-format-pattern-text-field-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { changeHandlerValueReturn } from '../decorators/change-handler-value-return';
import { selectTextOrClearOnFocus } from '../decorators/select-text-or-clear-on-focus';
import { inject as service } from '@ember/service';

@usesErrorValidation
@changeHandlerValueReturn
@selectTextOrClearOnFocus
export default class RPaperNumberFormatPatternTextFieldComponent extends BaseEmberPaperReact {
  @service inputMaskTypes;

  constructor() {
    super(...arguments);
    this.componentType = NUMBER_FORMAT_PATTERN_TEXT_FIELD.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, NumberFormatPatternTextFieldPropObj);
    this.reactElement = ReactNumberFormatPatternTextField;
  }

  initializeProps() {
    super.initializeProps();
    if (this.args.maskName) {
      const mask = this.inputMaskTypes.getNumberFormatPatternType(this.args.maskName);
      Object.assign(this.propsToPass, mask);
    }
  }
}




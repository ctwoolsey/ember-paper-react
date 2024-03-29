import { ReactIMaskTextField } from '../react-component-lib/react-i-mask-text-field'
import { I_MASK_TEXT_FIELD } from '../constants/i-mask-text-field';
import { IMaskTextFieldPropObj } from '../prop-files/i-mask-text-field-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { usesErrorValidation } from '../decorators/uses-error-validation';
import { changeHandlerValueReturn } from '../decorators/change-handler-value-return';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { next } from '@ember/runloop';

@usesErrorValidation
@changeHandlerValueReturn
export default class RPaperIMaskTextFieldComponent extends BaseEmberPaperReact {
  @service inputMaskTypes;

  constructor() {
    super(...arguments);
    this.componentType = I_MASK_TEXT_FIELD.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, IMaskTextFieldPropObj);
    this.reactElement = ReactIMaskTextField;
  }

  initializeProps() {
    super.initializeProps();
    if (this.args.maskName) {
      const mask = this.inputMaskTypes.getIMaskType(this.args.maskName);
      Object.assign(this.propsToPass, mask);
    }
    this.propsToPass.onChange = this.onChangeHandler;

    if (this.args.value === undefined) {
      this.propsToPass.value = '';
    }
  }

  @action
  onChangeHandler(event) {
    if (this.args.value === undefined) {
      next(this, () => {
        this.changeReactState('value', event.target.value);
      });
    }
  }
}


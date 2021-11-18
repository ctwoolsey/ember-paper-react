import { CHECKBOX } from "../constants/checkbox";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CheckboxPropObj } from '../prop-files/checkbox-props';
import { FormControlLabelPropObj } from '../prop-files/form-control-label-props';
import { ReactCheckbox } from '../react-component-lib/react-checkbox';

export default class RPaperCheckbox extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = CHECKBOX.COMPONENT_TYPE;
    this.loadPropObject(CheckboxPropObj, FormControlLabelPropObj);
    this.reactElement = ReactCheckbox;
  }

  initializeProps() {
    super.initializeProps();

    if (this.args.onChange) {
      this.propsToPass.onChange = this.onChangeHandler.bind(this);
    }
  }

  onChangeHandler(event) {
    if (this.args.onChange) {
      if (!this.args.nativeOnChange) {
        return this.args.onChange(event.target.checked);
      } else {
        return this.args.onChange(event);
      }
    } else {
      return null;
    }
  }
}

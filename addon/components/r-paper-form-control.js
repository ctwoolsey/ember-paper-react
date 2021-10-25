import { ReactFormControl } from '../react-component-lib/react-form-control'
import { FORM_CONTROL } from '../constants/form-control';
import { FormControlPropObj } from '../prop-files/form-control-props';
import BaseInElementRender from './base/base-in-element-render';

export default class RPaperFormControlComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = FORM_CONTROL.COMPONENT_TYPE;
    this.loadPropObject(FormControlPropObj);
    this.reactElement = ReactFormControl;
  }
}


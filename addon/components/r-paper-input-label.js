import { ReactInputLabel } from '../react-component-lib/react-input-label'
import { INPUT_LABEL } from '../constants/input-label';
import { InputLabelPropObj } from '../prop-files/input-label-props';
import BaseInElementRender from './base/base-in-element-render';

export default class RPaperInputLabelComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = INPUT_LABEL.COMPONENT_TYPE;
    this.loadPropObject(InputLabelPropObj);
    this.reactElement = ReactInputLabel;
  }
}


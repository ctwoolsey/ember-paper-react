import { TEXT_FIELD } from "../constants/text-field";
import { ReactTextField } from '../react-component-lib/react-text-field';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import BaseInElementRender from "./base/base-in-element-render";
import { useInputMask }  from '../decorators/use-input-mask'
import { next } from '@ember/runloop';

@useInputMask
export default class RPaperTextFieldComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = TEXT_FIELD.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj);
    this.reactElement = ReactTextField;
  }

  initializeProps() {
    super.initializeProps();

    if (this.args.value === '') {
      this.propsToPass.value = '';
    }

    if (this.args.select) {
      if (!this.propsToPass.SelectProps) {
        this.propsToPass.SelectProps = {};
      }
      this.propsToPass.SelectProps.native = true;
    }
  }

  renderChildren() {
    if (this.args.select) {
      this.moveLocation = this.reactRef.current.componentRef.current.getElementsByClassName(TEXT_FIELD.INSERT_CLASS)[0];
      this.args.value && next(this, () => {
        this.moveLocation.value = this.args.value;
      });
    }
  }
}


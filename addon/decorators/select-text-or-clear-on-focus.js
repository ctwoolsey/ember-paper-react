import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { TEXT_FIELD } from '../constants/text-field';

function selectTextOrClearOnFocus(c){
  return class SelectTextOrClearOnFocus extends c {

    initializeProps() {
      super.initializeProps();
      this.propsToPass.onFocus = this.onFocusHandler;
      this.propsToPass.onBlur = this.onBlurHandler;
      this.valueHolder = '';
    }

    @action
    onFocusHandler(event) {
      this.args.onFocus && this.args.onFocus(event);
      if (this.args.clearOnFocus) {
        this.valueHolder = this.reactRef.current.state.value;
        later(this, function() {
          this.changeReactState('value', '');
        }, 50);
      } else {
        if (this.args.selectAllOnFocus !== false) {
          later(this, function() {
            this.reactRef.current.componentRef.current.querySelector(`.${TEXT_FIELD.BASE_INPUT_CLASS}`).select();
          }, 50);
        }
      }
    }

    @action
    onBlurHandler(event) {
      this.args.onBlur && this.args.onBlur(event);
      if (this.args.clearOnFocus) {
        if (this.reactRef.current.state.value === '') {
          //if user didn't change value after focusing on field, renew former value.
          this.changeReactState('value', this.valueHolder);
        }
      }
    }
  }
}

export { selectTextOrClearOnFocus }

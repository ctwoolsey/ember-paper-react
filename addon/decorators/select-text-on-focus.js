import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { TEXT_FIELD } from '../constants/text-field';

function selectTextOnFocus(c){
  return class SelectTextOnFocus extends c {

    initializeProps() {
      super.initializeProps();
      this.propsToPass.onFocus = this.onFocusHandler;
    }

    @action
    onFocusHandler(event) {
      this.args.onFocus && this.args.onFocus(event);
      if (this.args.clearOnFocus) {
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
  }
}

export { selectTextOnFocus }

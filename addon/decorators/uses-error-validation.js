import { action } from '@ember/object';
import { next } from '@ember/runloop';
import { reactCreateKeyedList } from '../react-component-lib/utility/react-create-keyed-list';

function usesErrorValidation(c){
  return class UsesErrorValidation extends c {
    constructor() {
      super(...arguments);
      this.setValidation();
    }

    get isTouched() {
      return this.args.isTouched;
    }

    get errors() {
      return this.args.errors;
    }

    @action
    setValidation() {
      if (this.isTouched && this.errors &&
        ((Array.isArray(this.errors) && this.errors.length > 0) || !Array.isArray(this.errors))) {
        next(this, function () {
          this.setError(true);
          this.setHelperText(this.errors);
        });
      } else {
        this.setError(false);
        this.setHelperText([]);
      }
    }

    setError(value) {
      this.changeReactState('error', value);
    }

    setHelperText(value) {
      this.changeReactState('helperText', reactCreateKeyedList(value));
    }

  }
}

export { usesErrorValidation }

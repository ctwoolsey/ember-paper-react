import { action } from '@ember/object';
import { next } from '@ember/runloop';

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
      const helperTextArray = [];
      if (Array.isArray(value)) {
        for(let i = 0; i < value.length; i++) {
          helperTextArray.push(value[i]);
          if (i !== value.length - 1) {
            helperTextArray.push(<br></br>);
          }
        }
      }
      this.changeReactState('helperText', helperTextArray);
    }

  }
}

export { usesErrorValidation }

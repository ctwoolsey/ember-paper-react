import { action } from '@ember/object';

function changeHandlerValueReturn(c){
  return class ChangeHandlerValueReturn extends c {

    initializeProps() {
      super.initializeProps();
      if (this.args.onChange) {
        this.propsToPass.onChange = this.onChangeHandler;
      }
    }

    @action
    onChangeHandler(event) {
      super.onChangeHandler && super.onChangeHandler(event);
      if (this.args.onChange) {
        if (!this.args.nativeOnChange) {
          this.args.onChange(event.target.value);
        } else {
          return this.args.onChange(event);
        }
      }
    }

  }
}

export { changeHandlerValueReturn }

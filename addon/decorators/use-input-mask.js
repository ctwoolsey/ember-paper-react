import React from "react";
import Inputmask from "inputmask";

function useInputMask(c){
  return class UseInputMask extends c {
    constructor() {
      super(...arguments);
      this.inputmask = null;
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.inputRef = React.createRef();

      if (this.args.mask) {
        if (this.args.maskDefaults) {
          Inputmask.extendDefaults(this.args.maskDefaults);
        }
        if (this.args.maskDefinitions) {
          Inputmask.extendDefinitions(this.args.maskDefinitions);
        }
        if (this.args.maskAlias) {
          Inputmask.extendAliases(this.args.maskAliases);
        }
      }
    }

    initializeProps() {
      super.initializeProps();
      if (this.args.onChange) {
        this.props.onChange = this.onChangeHandler;
      }
      this.props.inputRef = this.inputRef;
    }

    renderElement() {
      if (this.args.mask) {
        this.inputmask = Inputmask(this.args.mask).mask(this.inputRef.current);
      }

      super.renderElement();
    }

    onChangeHandler(event) {
      if (this.args.onChange && this.args.mask) {
        return this.args.onChange(event, this.inputmask.unmaskedvalue());
      } else {
        if (this.args.onChange) {
          return this.args.onChange(event);
        } else {
          return null;
        }
      }
    }

  }
}

export { useInputMask }

import { action } from '@ember/object';

function adjustInputMaskCursor(c){
  return class AdjustInputMaskCursor extends c {

    constructor(props) {
      super(props);
      this.selectionStart = null;
      this.selectionEnd = null;
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log(`shouldComponentUpdate, cursor pos: ${this.inputEl.selectionStart}`);
      if (this.hasFocus) {
        this.selectionStart = this.inputEl.selectionStart;
        this.selectionEnd = this.inputEl.selectionEnd;
      } else {
        this.selectionStart = null;
        this.selectionEnd = null;
      }
      return true;
    }

    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('componentDidUpdate');
      if (this.selectionStart !== null && this.selectionEnd !== null) {
        this.inputEl.focus();
        this.inputEl.setSelectionRange(this.selectionStart, this.selectionEnd);
      }
    }

    get hasFocus() {
      return this.inputEl === document.activeElement;
    }

    get inputEl() {
      return this.componentRef.current.querySelector(".MuiInputBase-input");
    }

  }
}

export { adjustInputMaskCursor }

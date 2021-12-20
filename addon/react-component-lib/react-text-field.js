import React from 'react';
import TextField from '@mui/material/TextField';
import { ReactBase } from './base/react-base';
import { TextFieldPropObj } from '../prop-files/text-field-props';

export class ReactTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.cursorPosition = 0;
    this.valueLength = null;
    this.componentCursorChanged = false;
    this.cursorBeforeMaskItemCount = 0;
    this.keyCode = null;
    if (props.inputRef === undefined) {
      props.inputRef = React.createRef();
    }
    this.initialize(TextFieldPropObj);

    //this.setCursorPositionOnKeyDown = this.setCursorPositionOnKeyDown.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.inputValueBlurred = this.inputValueBlurred.bind(this);
    this.inputValueFocused = this.inputValueFocused.bind(this);


  }

  renderComponent() {
    return (
      <TextField
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        <option>Dummy Option</option>
      </TextField>
    )
  }

  componentDidMount() {
    //this.props.inputRef.current.addEventListener('keydown', this.setCursorPositionOnKeyDown);
    this.props.inputRef.current.addEventListener('keydown', this.onKeyDown);
    this.props.inputRef.current.addEventListener('click', this.onClick);
    this.props.inputRef.current.addEventListener('blur', this.inputValueBlurred);
    this.props.inputRef.current.addEventListener('focus', this.inputValueFocused);
  }

  inputValueBlurred() {
    console.log(`Blurred`);
    this.valueLength = null;
  }

  inputValueFocused() {
    console.log(`Focused`);
    this.updateValueLength();
  }

  updateValueLength() {
    this.valueLength = this.staticProps.inputRef.current.value.length;
    console.log(`valueLength: ${this.valueLength}`);
  }

  onClick() {
    this.loadCursorPosition();
  }

  onKeyDown(e) {
    this.keyCode = e.keyCode;
    this.loadCursorPosition();
    this.cursorBeforeMaskItemCount = this.isCursorBeforeMaskItem();
    const aheadOfMakeItemCount = this.isCursorAheadOfMaskItem(e.keyCode);
    console.log(`cursorBeforeMaskItemCount: ${this.cursorBeforeMaskItemCount}`);
    console.log(`aheadOfMakeItemCount: ${aheadOfMakeItemCount}`);
    console.log(`unmasked: ${this.state.value} / masked: ${this.staticProps.inputRef.current.value}`);
    console.log(`cursorPosition: ${this.cursorPosition}`);
    console.log(`Caret pos: ${this.staticProps.inputRef.current.inputmask.caretPos.begin}`);
    console.log(`-------------`);
    switch (e.keyCode) {
      case 8: //Backspace
        this.cursorPosition -= (1 + aheadOfMakeItemCount);
        break;
      case 13: //Enter
        break;
      case 37: //ArrowLeft
        break;
      case 38: //ArrowUp
        break;
      case 39: //ArrowRight
        break;
      case 40: //ArrowDown
        break;
      case 46: //Delete
        this.cursorPosition += this.cursorBeforeMaskItemCount;
        break;
      default:
        this.cursorPosition += 1 + this.cursorBeforeMaskItemCount;
        break;
    }
  }

  loadCursorPosition() {
    this.cursorPosition = this.staticProps.inputRef.current.selectionStart;
  }

  isCursorAheadOfMaskItem(keyCode) {
    let aheadOfHowManyMaskedItems = 0;
    if (keyCode === 8) {
      const unmaskedStack = [...this.state.value];
      const maskedStack = [...this.staticProps.inputRef.current.value];
      const placeholder = this.staticProps.inputRef.current.inputmask.opts.placeholder;
      console.log(`Placeholder: ${placeholder}`);

      let unmaskedPosition = 0;
      for (let position = 0; position < this.cursorPosition - 1; position++) {
        let maskedValue = maskedStack[position];
        let unmaskedValue = unmaskedStack[unmaskedPosition];
        if (maskedValue === unmaskedValue && maskedValue === placeholder) {
          unmaskedPosition++;
          aheadOfHowManyMaskedItems = 0;
        } else {
          aheadOfHowManyMaskedItems++;
        }
      }

      /*if (placeholder === '0') {  //no marked placeholder ie: '_'

      } else {
        if (this.cursorPosition < maskedStack.length) {
          let position = this.cursorPosition - 1;
          //while (position > 0 && maskedStack[position] !== placeholder && maskedStack[position] !== <a real value>) {
          while (position > 0 && this.staticProps.inputRef.current.inputmask.maskset.validPositions[position].generatedInput) {
            aheadOfHowManyMaskedItems++;
            position--;
          }
        }
      }*/
    }

    return aheadOfHowManyMaskedItems;
  }

  isCursorBeforeMaskItem() {
    const unmaskedStack = [...this.state.value];
    const maskedStack = [...this.staticProps.inputRef.current.value];
    const placeholder = this.staticProps.inputRef.current.inputmask.opts.placeholder;
    console.log(`Placeholder: ${placeholder}`);

    let beforeHowManyMaskedItems;
    if (placeholder === '0') {
      let unmaskedValue = unmaskedStack.shift();
      let cursorIsBeforeMaskedItem;
      beforeHowManyMaskedItems = 0;
      for (let i = 0; i <= this.cursorPosition; i++) {
        cursorIsBeforeMaskedItem = true;
        let maskedValue = maskedStack.shift();
        if (maskedValue === unmaskedValue) {
          cursorIsBeforeMaskedItem = false;
          unmaskedValue = unmaskedStack.shift();
        }
      }

      if (cursorIsBeforeMaskedItem) {
        beforeHowManyMaskedItems = 1;
        if (maskedStack.length > 0) {
          let maskedValue = maskedStack.shift();
          while (maskedStack.length > 0 && maskedValue !== unmaskedValue) {
            beforeHowManyMaskedItems++;
            maskedValue = maskedStack.shift();
          }
        }
      }
    } else {
      let unmaskedValue = unmaskedStack.shift();
      let cursorIsBeforeMaskedItem;
      beforeHowManyMaskedItems = 0;
      for (let i = 0; i <= this.cursorPosition; i++) {
        cursorIsBeforeMaskedItem = true;
        let maskedValue = maskedStack.shift();
        if (maskedValue === unmaskedValue || maskedValue === placeholder) {
          cursorIsBeforeMaskedItem = false;
          unmaskedValue = unmaskedStack.shift();
        }
      }

      if (cursorIsBeforeMaskedItem) {
        beforeHowManyMaskedItems = 1;
        if (maskedStack.length > 0) {
          let maskedValue = maskedStack.shift();
          while (maskedStack.length > 0 && (maskedValue !== unmaskedValue && maskedValue !== placeholder)) {
            beforeHowManyMaskedItems++;
            maskedValue = maskedStack.shift();
          }
        }
      }
    }

    return beforeHowManyMaskedItems;
  }

  get maskDelta() {
    let deltaLength = Math.abs(this.staticProps.inputRef.current.value.length - this.valueLength);
    console.log(`Setting deltaLength: ${deltaLength}; ${this.staticProps.inputRef.current.value.length} - ${this.valueLength}`);
    return deltaLength;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const deltaLength = this.maskDelta;
    switch (this.keyCode) {
      case 8: //Backspace
        if (deltaLength > 0) {
          this.cursorPosition -= (deltaLength - 1);
        }
        break;
      case 13: //Enter
        break;
      case 37: //ArrowLeft
        break;
      case 38: //ArrowUp
        break;
      case 39: //ArrowRight
        break;
      case 40: //ArrowDown
        break;
      case 46: //Delete
        if (deltaLength > 0) {
          this.cursorPosition -= (deltaLength - 1);
        }
        break;
      default:
        if (deltaLength > 0) {
          this.cursorPosition += deltaLength - 1;
        }
        break;
    }

    this.staticProps.inputRef.current.focus();
    this.staticProps.inputRef.current.setSelectionRange(this.cursorPosition, this.cursorPosition);
    this.updateValueLength();
  }

   componentWillUnmount() {
     //this.props.inputRef.current.removeEventListener('onkeydown', this.setCursorPositionOnKeyDown);
     this.props.inputRef.current.removeEventListener('keydown', this.onKeyDown);
     this.props.inputRef.current.removeEventListener('click', this.onClick);
     this.props.inputRef.current.removeEventListener('blur', this.inputValueBlurred);
     this.props.inputRef.current.removeEventListener('focus', this.inputValueFocused);
   }
}

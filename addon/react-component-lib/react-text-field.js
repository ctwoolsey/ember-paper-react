import React from 'react';
import TextField from '@mui/material/TextField';
import { ReactBase } from './base/react-base';
import { TextFieldPropObj } from '../prop-files/text-field-props';

export class ReactTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.cursorPosition = 0;
    this.componentCursorChanged = false;
    if (props.inputRef === undefined) {
      props.inputRef = React.createRef();
    }
    this.initialize(TextFieldPropObj);

    this.setCursorPositionOnKeyDown = this.setCursorPositionOnKeyDown.bind(this);
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
    this.props.inputRef.current.addEventListener('keydown', this.setCursorPositionOnKeyDown);
  }

  setCursorPositionOnKeyDown(e) {
    const cursorPosition = this.staticProps.inputRef.current.selectionStart;
    this.componentCursorChanged = true;
    switch (e.keyCode) {
      case 8: //Backspace
        this.cursorPosition = cursorPosition - 1;
        break;
      case 37: //ArrowLeft
        //this.cursorPosition = cursorPosition - 1;
        this.componentCursorChanged = false;
        break;
      case 39: //ArrowRight
        //this.cursorPosition = cursorPosition + 1;
        this.componentCursorChanged = false;
        break;
      case 46: //Delete
        this.cursorPosition = cursorPosition;
        break;
      default:
        this.cursorPosition = cursorPosition + 1;
        break;
    }
    if (this.cursorPosition < 0) {
      this.cursorPosition = 0;
    }

    console.log(`KeyDown: ${cursorPosition} => ${this.cursorPosition}`);
  }

  componentDidUpdate() {
    if (this.componentCursorChanged) {
      this.componentCursorChanged = false;
      this.staticProps.inputRef.current.focus();
      this.staticProps.inputRef.current.setSelectionRange(this.cursorPosition, this.cursorPosition);
      console.log(`Component updated: ${this.staticProps.inputRef.current.selectionStart}`);
    }
  }

  componentWillUnmount() {
    this.props.inputRef.current.removeEventListener('onkeydown', this.setCursorPositionOnKeyDown);
  }
}

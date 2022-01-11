import { ReactBase } from './base/react-base';
import { IMaskTextFieldPropObj } from '../prop-files/i-mask-text-field-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropRemover } from './utility/react-prop-remover';
import { IMaskInput } from 'react-imask';
import React from 'react';
import TextField from '@mui/material/TextField';

export class ReactIMaskTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.iMaskValue = '';
    this.isControlledValue = false;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.initialize();
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedMaskedTextFieldProps = reactPropSifter(this.props, IMaskTextFieldPropObj, false);

    reactPropRemover(siftedTextFieldProps, siftedMaskedTextFieldProps);
    this.isControlledValue = this.props.value !== undefined;

    this.state = Object.assign({},
      siftedMaskedTextFieldProps.stateProps,
      siftedMaskedTextFieldProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent,
      { iMaskValue: this.iMaskValue });
    this.staticMaskedTextFieldProps = siftedMaskedTextFieldProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateMaskedTextFieldProps = siftedMaskedTextFieldProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;

    this.MaskedTextField = this.MaskedTextField.bind(this);

  }

  MaskedTextField(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        inputRef={ref}
        {...(this.placeStaticProps(this.staticMaskedTextFieldProps))}
        {...(this.placeStateProps(this.stateMaskedTextFieldProps))}
        onAccept={(maskedValue, iMask) => {
          console.log('in onAccept');
          console.log(`Unmasked: ${iMask.unmaskedValue}, maskedValue: ${maskedValue}, value: ${this.state.value}`);
          let skipOnChange = false;
          this.iMaskValue = maskedValue;
          if (this.isControlledValue && iMask.unmaskedValue === this.state.value) {
            skipOnChange = true;
          }
          if (!this.isControlledValue && this.iMaskValue === this.state.iMaskValue) {
            skipOnChange = true;
          }
          if (!skipOnChange) {
            onChange({
              target: {
                value: iMask.unmaskedValue,
                maskedValue: maskedValue
              },
            });
          }
        }}
      />
    );
  }

  onChangeHandler(event) {
    if (!this.isControlledValue) {
      this.setState( { iMaskValue: this.iMaskValue });
    }
    this.props.onChange && this.props.onChange(event);
  }

  renderComponent() {
    const MaskedTextField = React.forwardRef(this.MaskedTextField);
    const inputProps = Object.assign({}, this.staticTextFieldProps.InputProps, { inputComponent: MaskedTextField });

    /* iMaskValue is set and used in case the user doesn't have @value defined.
       IMaskValue requires the value property to be set. */

    return (
      <TextField
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticTextFieldProps))}
        {...(this.placeStateProps(this.stateTextFieldProps))}
        value={ this.isControlledValue ? this.state.value : this.state.iMaskValue }
        onChange={ this.onChangeHandler }
        InputProps={inputProps }
      />
    )
  }

  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState, nextContext) {
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
    if (this.selectionStart && this.selectionEnd) {
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

/*
if click on drop down, then enter items value stays
if enter digit then loose focus and enter new items, can enter new values and it stays
if enter digit then drop down looses value.

maybe if has focus && no keydown and Unmasked -> '' then dont call onChange???  but could also navigate with keys
 */

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
    this.initialize();
    this.handleBlur = this.handleBlur.bind(this);
    this.ignoreBlur = false;
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedMaskedTextFieldProps = reactPropSifter(this.props, IMaskTextFieldPropObj, false);

    reactPropRemover(siftedTextFieldProps, siftedMaskedTextFieldProps);


    if (this.props.value) {
      this.iMaskValue = this.props.value;
    }
    console.log(`this.props.value: ${this.props.value}; iMaskValue: ${this.iMaskValue}`);

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
          console.log(`Unmasked: ${iMask.unmaskedValue}, this.iMaskValue: ${this.iMaskValue}, value: ${this.state.value}`);
          this.iMaskValue = maskedValue;
          //if (iMask.unmaskedValue !== this.state.value && this.state.value !== undefined) {
          if (iMask.unmaskedValue !== this.state.value) {
            console.log('calling onChange');
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

  setStateProp(propName, value) {
    console.log(`setStateProp [${propName}]:${value}`);
    if (propName !== 'value') {
      super.setStateProp(propName, value);
    } else {
      this.ignoreBlur = true;
      //commenting below out, control doesn't update form other value && when directly inputting to controlled, doesn't save value.
      this.setState({ iMaskValue: value, value: value });
    }
  }

  handleBlur(e) {
    if (this.ignoreBlur) {
      e.stopImmediatePropagation();
      e.preventDefault();
      console.log('ignoring blur');
      this.ignoreBlur = false;
    } else {
      console.log(`handle blur, setting ${this.iMaskValue}`);
      this.setState({ iMaskValue: this.iMaskValue });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(`Should component update? Input focus: ${this.hasFocus}`);
    const update = !this.ignoreBlur || !this.hasFocus;
    this.ignoreBlur = false;
    return update;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component updated');
    this.inputEl.removeEventListener('blur', this.handleBlur);
    this.inputEl.addEventListener('blur', this.handleBlur);
  }

  get hasFocus() {
    return this.inputEl === document.activeElement;
  }

  get inputEl() {
    return this.componentRef.current.querySelector(".MuiInputBase-input");
  }

  componentDidMount() {
    this.inputEl.addEventListener('blur', this.handleBlur);
  }

  componentWillUnmount() {
    this.inputEl.removeEventListener('blur', this.handleBlur);
  }

  renderComponent() {
    const MaskedTextField = React.forwardRef(this.MaskedTextField);
    const inputProps = Object.assign({}, this.staticTextFieldProps.InputProps, { inputComponent: MaskedTextField });

    /* iMaskValue is set and used in case the user doesn't have @value defined.
       IMaskValue requires the value property to be set. */
    const {
      iMaskValue
    } = this.state;

    return (
      <TextField
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticTextFieldProps))}
        {...(this.placeStateProps(this.stateTextFieldProps))}
        value={iMaskValue}
        InputProps={inputProps }
      />
    )
  }
}

/*
if click on drop down, then enter items value stays
if enter digit then loose focus and enter new items, can enter new values and it stays
if enter digit then drop down looses value.

maybe if has focus && no keydown and Unmasked -> '' then dont call onChange???  but could also navigate with keys
 */

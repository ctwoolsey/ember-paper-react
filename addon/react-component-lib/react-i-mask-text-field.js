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
    this.initialize();
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedMaskedTextFieldProps = reactPropSifter(this.props, IMaskTextFieldPropObj, false);

    reactPropRemover(siftedTextFieldProps, siftedMaskedTextFieldProps);

    this.state = Object.assign({},
      siftedMaskedTextFieldProps.stateProps,
      siftedMaskedTextFieldProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent,
      { iMaskValue: '' });
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
        onAccept={(value) => {
          onChange({
            target: {
              value: value
            },
          });
        }}
      />
    );
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
        value={iMaskValue}
        {...(this.placeStaticProps(this.staticTextFieldProps))}
        {...(this.placeStateProps(this.stateTextFieldProps))}
        InputProps={inputProps }
      />
    )
  }
}

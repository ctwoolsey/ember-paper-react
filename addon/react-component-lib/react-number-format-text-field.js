import NumberFormat from 'react-number-format';
import { ReactBase } from './base/react-base';
import { NumberFormatTextFieldPropObj } from '../prop-files/number-format-text-field-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { reactPropRemover } from './utility/react-prop-remover';
import TextField from '@mui/material/TextField';
import React from 'react';

export class ReactNumberFormatTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedMaskedTextFieldProps = reactPropSifter(this.props, NumberFormatTextFieldPropObj, false);

    reactPropRemover(siftedTextFieldProps, siftedMaskedTextFieldProps);

    this.state = Object.assign({},
      siftedMaskedTextFieldProps.stateProps,
      siftedMaskedTextFieldProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticMaskedTextFieldProps = siftedMaskedTextFieldProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateMaskedTextFieldProps = siftedMaskedTextFieldProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;

    this.MaskedTextField = this.MaskedTextField.bind(this);

  }

  MaskedTextField(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        {...(this.placeStaticProps(this.staticMaskedTextFieldProps))}
        {...(this.placeStateProps(this.stateMaskedTextFieldProps))}
        onValueChange={(values) => {
          onChange({
            target: {
              value: values.value,
              formattedValue: values.formattedValue,
            },
          });
        }}
      />
    );
  }

  renderComponent() {
    const MaskedTextField = React.forwardRef(this.MaskedTextField);
    const inputProps = Object.assign({}, this.staticTextFieldProps.InputProps, { inputComponent: MaskedTextField });

    return (
      <TextField
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticTextFieldProps))}
        {...(this.placeStateProps(this.stateTextFieldProps))}
        InputProps={inputProps}
      />
    )
  }
}

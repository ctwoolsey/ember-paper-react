import { NumericFormat } from 'react-number-format';
import { ReactBase } from './base/react-base';
import { NumberFormatNumericTextFieldPropObj } from '../prop-files/number-format-numeric-text-field-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { reactPropRemover } from './utility/react-prop-remover';
import TextField from '@mui/material/TextField';
import React from 'react';

export class ReactNumberFormatNumericTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize() {
    let siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedMaskedTextFieldProps = reactPropSifter(this.props, NumberFormatNumericTextFieldPropObj, false);

    siftedTextFieldProps = reactPropRemover(siftedTextFieldProps, siftedMaskedTextFieldProps, ['value, onChange']);

    this.state = Object.assign({},
      siftedMaskedTextFieldProps.stateProps,
      siftedMaskedTextFieldProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticMaskedTextFieldProps = siftedMaskedTextFieldProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateMaskedTextFieldProps = siftedMaskedTextFieldProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;

  }

  renderComponent() {
    const { onChange, onValueChange } = this.props;
    return (
      <NumericFormat
        getInputRef={this.componentRef}
        {...(this.placeStaticProps(this.staticMaskedTextFieldProps))}
        {...(this.placeStateProps(this.stateMaskedTextFieldProps))}
        {...(this.placeStaticProps(this.staticTextFieldProps))}
        {...(this.placeStateProps(this.stateTextFieldProps))}
        onChange={() => {}}
        onValueChange={(values, sourceInfo) => {
          onChange && onChange({
            target: {
              value: values.floatValue,
              maskedValue: values.formattedValue,
            },
          });
          onValueChange && onValueChange(values, sourceInfo);
        }}
        customInput={TextField}
      />
    );
  }
}

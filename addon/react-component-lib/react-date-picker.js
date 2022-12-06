import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ReactBase } from './base/react-base';
import { DatePickerPropObj } from '../prop-files/date-picker-props';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React from 'react';
import TextField from '@mui/material/TextField';
import { reactPropSifter } from './utility/react-prop-sifter';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropRemover } from './utility/react-prop-remover';

export class ReactDatePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize(DatePickerPropObj);
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedDatePickerProps = reactPropSifter(this.props, DatePickerPropObj, false);

    siftedDatePickerProps.staticProps['renderInput'] = this.renderTextField;
    reactPropRemover(siftedTextFieldProps, siftedDatePickerProps);

    this.state = Object.assign({},
      siftedDatePickerProps.stateProps,
      siftedDatePickerProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticDatePickerProps = siftedDatePickerProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateDatePickerProps = siftedDatePickerProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;
  }

  renderComponent() {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={this.state.locale}>
        <DatePicker
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticDatePickerProps))}
          {...(this.placeStateProps(this.stateDatePickerProps))}
        />
      </LocalizationProvider>
    )
  }

  renderTextField(params) {
    return (
      <TextField
        {...params}
        {...(this.placeStaticProps(this.staticTextFieldProps, params))}
        {...(this.placeStateProps(this.stateTextFieldProps, params))}
      />
    )
  }
}

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ReactBase } from './base/react-base';
import { DateTimePickerPropObj } from '../prop-files/date-time-picker-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropRemover } from './utility/react-prop-remover';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import React from 'react';

export class ReactDateTimePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize(DateTimePickerPropObj);
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedDateTimePickerProps = reactPropSifter(this.props, DateTimePickerPropObj, false);

    siftedDateTimePickerProps.staticProps['renderInput'] = this.renderTextField;
    reactPropRemover(siftedTextFieldProps, siftedDateTimePickerProps);

    this.state = Object.assign({},
      siftedDateTimePickerProps.stateProps,
      siftedDateTimePickerProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticDatePickerProps = siftedDateTimePickerProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateDatePickerProps = siftedDateTimePickerProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;
  }

  renderComponent() {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={this.state.locale}>
        <DateTimePicker
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

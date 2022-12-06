import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ReactBase } from './base/react-base';
import { TimePickerPropObj } from '../prop-files/time-picker-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropRemover } from './utility/react-prop-remover';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import React from 'react';

export class ReactTimePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize(TimePickerPropObj);
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedTimePickerProps = reactPropSifter(this.props, TimePickerPropObj, false);

    siftedTimePickerProps.staticProps['renderInput'] = this.renderTextField;
    reactPropRemover(siftedTextFieldProps, siftedTimePickerProps);

    this.state = Object.assign({},
      siftedTimePickerProps.stateProps,
      siftedTimePickerProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticTimePickerProps = siftedTimePickerProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateTimePickerProps = siftedTimePickerProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;
  }

  renderComponent() {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={this.state.locale}>
        <TimePicker
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticTimePickerProps))}
          {...(this.placeStateProps(this.stateTimePickerProps))}
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

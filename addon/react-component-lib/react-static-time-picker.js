import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { ReactBase } from './base/react-base';
import { StaticTimePickerPropObj } from '../prop-files/static-time-picker-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropRemover } from './utility/react-prop-remover';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import React from 'react';

export class ReactStaticTimePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize(StaticTimePickerPropObj);
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedStaticTimePickerProps = reactPropSifter(this.props, StaticTimePickerPropObj, false);

    siftedStaticTimePickerProps.staticProps['renderInput'] = this.renderTextField;
    reactPropRemover(siftedTextFieldProps, siftedStaticTimePickerProps);

    this.state = Object.assign({},
      siftedStaticTimePickerProps.stateProps,
      siftedStaticTimePickerProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticStaticTimePickerProps = siftedStaticTimePickerProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateStaticTimePickerProps = siftedStaticTimePickerProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;
  }

  renderComponent() {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={this.state.locale}>
        <StaticTimePicker
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticStaticTimePickerProps))}
          {...(this.placeStateProps(this.stateStaticTimePickerProps))}
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

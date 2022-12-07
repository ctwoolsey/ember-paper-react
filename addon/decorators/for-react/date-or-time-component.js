import { reactPropSifter } from '../../react-component-lib/utility/react-prop-sifter';
import { TextFieldPropObj } from '../../prop-files/text-field-props';
import { reactPropRemover } from '../../react-component-lib/utility/react-prop-remover';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import React from 'react';

function dateOrTimeComponent(c){
  return class DateOrTimeComponent extends c {

    initializeWithTextField(dateOrTimePropObj) {
      const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
      const siftedDateOrTimePickerProps = reactPropSifter(this.props, dateOrTimePropObj, false);

      this.renderTextField = this.renderTextField.bind(this);
      siftedDateOrTimePickerProps.staticProps['renderInput'] = this.renderTextField;
      reactPropRemover(siftedTextFieldProps, siftedDateOrTimePickerProps);

      this.state = Object.assign({},
        siftedDateOrTimePickerProps.stateProps,
        siftedDateOrTimePickerProps.statefulPropsNotForComponent,
        siftedTextFieldProps.stateProps,
        siftedTextFieldProps.statefulPropsNotForComponent);
      this.staticDateOrTimePickerProps = siftedDateOrTimePickerProps.staticProps;
      this.staticTextFieldProps = siftedTextFieldProps.staticProps;
      this.stateDateOrTimePickerProps = siftedDateOrTimePickerProps.stateProps;
      this.stateTextFieldProps = siftedTextFieldProps.stateProps;
    }

    renderComponent() {
      const ComponentToRender = this.DefaultComponentToRender;
      return (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={this.state.locale}>
          <ComponentToRender
            ref={this.componentRef}
            {...(this.placeStaticProps(this.staticDateOrTimePickerProps))}
            {...(this.placeStateProps(this.stateDateOrTimePickerProps))}
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
}

export { dateOrTimeComponent }

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { AutocompletePropObj } from './utility/props/autocomplete-props';
import { TextFieldPropObj } from './utility/props/text-field-props';
import { reactPropSifter } from "./utility/react-prop-sifter";

export class ReactAutocomplete extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize();
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedAutocompleteProps = reactPropSifter(this.props, AutocompletePropObj);

    siftedAutocompleteProps.staticProps['renderInput'] = this.renderTextField;
    delete siftedTextFieldProps.ref;

    this.state = Object.assign({},
      siftedAutocompleteProps.stateProps,
      siftedAutocompleteProps.statefulPropsNotForComponent,
      siftedTextFieldProps.stateProps,
      siftedTextFieldProps.statefulPropsNotForComponent);
    this.staticAutocompleteProps = siftedAutocompleteProps.staticProps;
    this.staticTextFieldProps = siftedTextFieldProps.staticProps;
    this.stateAutocompleteProps = siftedAutocompleteProps.stateProps;
    this.stateTextFieldProps = siftedTextFieldProps.stateProps;
  }


  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Autocomplete
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticAutocompleteProps))}
          {...(this.placeStateProps(this.stateAutocompleteProps))}
        />
      </ReactConditionalThemeProvider>
    );
  }

  renderTextField(params) {
    return (
      <TextField
        {...params}
        inputRef={this.staticTextFieldProps.inputRef}
        {...(this.placeStateProps(this.stateTextFieldProps))}
      />
    )
  }
}

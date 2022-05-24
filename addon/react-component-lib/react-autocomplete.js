import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { AutocompletePropObj } from '../prop-files/autocomplete-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { reactPropSifter } from './utility/react-prop-sifter';
import { reactPropRemover } from './utility/react-prop-remover';

export class ReactAutocomplete extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize();
  }

  initialize() {
    const siftedTextFieldProps = reactPropSifter(this.props, TextFieldPropObj);
    const siftedAutocompleteProps = reactPropSifter(this.props, AutocompletePropObj, false);

    siftedAutocompleteProps.staticProps['renderInput'] = this.renderTextField;
    reactPropRemover(siftedTextFieldProps, siftedAutocompleteProps);

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

  /*componentDidMount() {
    const fieldset = this.componentRef.current.querySelector('fieldset legend');
    if (this.state.label) {
      fieldset.classList.remove('ember-paper-react-hide');
    } else {
      fieldset.classList.add('ember-paper-react-hide');
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const fieldset = this.componentRef.current.querySelector('fieldset legend');
    if (this.state.label) {
      fieldset.classList.remove('ember-paper-react-hide');
    } else {
      fieldset.classList.add('ember-paper-react-hide');
    }
  }*/


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
        {...(this.placeStaticProps(this.staticTextFieldProps, params))}
        {...(this.placeStateProps(this.stateTextFieldProps, params))}
      />
    )
  }
}

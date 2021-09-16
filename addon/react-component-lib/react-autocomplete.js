import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { AutocompleteProps, AutocompleteStateProps, AutocompletePropsNotForComponent } from './utility/props/autocomplete-props';
import { TextFieldProps, TextFieldStateProps, TextFieldPropsNotForComponent } from './utility/props/text-field-props';


//Theme does not appear to be effective on this component
export class ReactAutocomplete extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize();
  }

  initialize() {
    this.state = {};
    this.statePropsForAutocompleteComponent = {};
    this.statePropsForTextFieldComponent = {};
    this.statePropsNotForAutocompleteComponent = {};
    this.statePropsNotForTextFieldComponent = {};
    this.staticPropsForAutocompleteComponent = {};
    this.staticPropsForTextFieldComponent = {};

    let propsForAutocompleteComponent = Object.assign({}, AutocompleteProps());
    let propsForTextFieldComponent = Object.assign({}, TextFieldProps());
    let statePropsForAutocompleteComponent = Object.assign({}, AutocompleteStateProps());
    let statePropsForTextFieldComponent = Object.assign({}, TextFieldStateProps());
    let statePropsNotForAutocompleteComponent = Object.assign({}, AutocompletePropsNotForComponent);
    let statePropsNotForTextFieldComponent = Object.assign({}, TextFieldPropsNotForComponent);

    for (let propName in this.props) {
      let isStateProperty = false;
      if (Object.prototype.hasOwnProperty.call(statePropsForAutocompleteComponent,propName)) {
        this.statePropsForAutocompleteComponent[propName] = this.props[propName];
        isStateProperty = true;
      }
      if (Object.prototype.hasOwnProperty.call(statePropsForTextFieldComponent,propName)) {
        this.statePropsForTextFieldComponent[propName] = this.props[propName];
        isStateProperty = true;
      }

      let isStatePropertyNotForComponent = false;
      if (!isStateProperty) {
        if (Object.prototype.hasOwnProperty.call(statePropsNotForAutocompleteComponent,propName)) {
          this.statePropsNotForAutocompleteComponent[propName] = this.props[propName];
          isStatePropertyNotForComponent = true;
        }
        if (Object.prototype.hasOwnProperty.call(statePropsNotForTextFieldComponent,propName)) {
          this.statePropsNotForTextFieldComponent[propName] = this.props[propName];
          isStatePropertyNotForComponent = true;
        }

        if (!isStatePropertyNotForComponent) {
          if (Object.prototype.hasOwnProperty.call(propsForAutocompleteComponent,propName)) {
            this.staticPropsForAutocompleteComponent[propName] = this.props[propName];
          }
          if (Object.prototype.hasOwnProperty.call(propsForTextFieldComponent,propName)) {
            this.staticPropsForTextFieldComponent[propName] = this.props[propName];
          }
        }
      }
    }

    Object.assign(this.state,
                  this.statePropsForAutocompleteComponent,
                  this.statePropsForTextFieldComponent,
                  this.statePropsNotForAutocompleteComponent,
                  this.statePropsNotForTextFieldComponent);

    this.staticPropsForAutocompleteComponent['renderInput'] = this.renderTextField;
    delete this.staticPropsForTextFieldComponent.ref;
  }


  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Autocomplete
          ref={this.componentRef}
          {...(this.placeProps(this.staticPropsForAutocompleteComponent))}
          {...(this.placeStateProps(this.statePropsForAutocompleteComponent))}
        />
      </ReactConditionalThemeProvider>
    );
  }

  renderTextField(params) {
    return (
      <TextField
        {...params}
        inputRef={this.staticPropsForTextFieldComponent.inputRef}
        {...(this.placeStateProps(this.statePropsForTextFieldComponent))}
      />
    )
  }
}

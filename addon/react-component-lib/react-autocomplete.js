import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { AutocompleteProps, AutocompleteStateProps, AutocompletePropsNotForComponent, AutocompleteStatePropsNotForComponent } from './utility/props/autocomplete-props';
import { TextFieldProps, TextFieldStateProps, TextFieldPropsNotForComponent, TextFieldStatePropsNotForComponent } from './utility/props/text-field-props';


//Theme does not appear to be effective on this component
export class ReactAutocomplete extends ReactBase{
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
    this.initialize();
  }

  initialize() {
    this.state = {};
    this.autocompleteProps = {};
    this.textFieldProps = {};
    this.statePropsForAutocompleteComponent = {};
    this.statePropsForTextFieldComponent = {};
    this.statePropsNotForAutocompleteComponent = {};
    this.statePropsNotForTextFieldComponent = {};
    this.propsNotForAutocompleteComponent = {};
    this.propsNotForTextFieldComponent = {};
    this.staticPropsForAutocompleteComponent = {};
    this.staticPropsForTextFieldComponent = {};

    let propsForAutocompleteComponent = Object.assign({}, AutocompleteProps());
    let propsForTextFieldComponent = Object.assign({}, TextFieldProps());
    let statePropsForAutocompleteComponent = Object.assign({}, AutocompleteStateProps());
    let statePropsForTextFieldComponent = Object.assign({}, TextFieldStateProps());
    let propsNotForAutocompleteComponent = Object.assign({}, AutocompletePropsNotForComponent);
    let propsNotForTextFieldComponent = Object.assign({}, TextFieldPropsNotForComponent);
    let statePropsNotForAutocompleteComponent = Object.assign({}, AutocompleteStatePropsNotForComponent);
    let statePropsNotForTextFieldComponent = Object.assign({}, TextFieldStatePropsNotForComponent);

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
      let isPropertyNotForComponent = false;
      if (!isStateProperty) {
        if (Object.prototype.hasOwnProperty.call(statePropsNotForAutocompleteComponent,propName)) {
          this.statePropsNotForAutocompleteComponent[propName] = this.props[propName];
          isStatePropertyNotForComponent = true;
        }
        if (Object.prototype.hasOwnProperty.call(statePropsNotForTextFieldComponent,propName)) {
          this.statePropsNotForTextFieldComponent[propName] = this.props[propName];
          isStatePropertyNotForComponent = true;
        }
        if (Object.prototype.hasOwnProperty.call(propsNotForAutocompleteComponent,propName)) {
          this.propsNotForAutocompleteComponent[propName] = this.props[propName];
          isPropertyNotForComponent = true;
        }
        if (Object.prototype.hasOwnProperty.call(propsNotForTextFieldComponent,propName)) {
          this.propsNotForTextFieldComponent[propName] = this.props[propName];
          isPropertyNotForComponent = true;
        }

        if (!isStatePropertyNotForComponent && !isPropertyNotForComponent) {
          if (Object.prototype.hasOwnProperty.call(propsForAutocompleteComponent,propName)) {
            this.staticPropsForAutocompleteComponent[propName] = this.props[propName];
          }
          if (Object.prototype.hasOwnProperty.call(propsForTextFieldComponent,propName)) {
            this.staticPropsForTextFieldComponent[propName] = this.props[propName];
          }
        }
      }
    }

    this.staticPropsForAutocompleteComponent['renderInput'] = this.renderTextField;
    delete this.staticPropsForTextFieldComponent.ref;

    Object.assign(this.state,
                  this.statePropsForAutocompleteComponent,
                  this.statePropsForTextFieldComponent,
                  this.statePropsNotForAutocompleteComponent,
                  this.statePropsNotForTextFieldComponent);
    Object.assign(this.autocompleteProps,
                  this.propsNotForAutocompleteComponent,
                  this.staticPropsForAutocompleteComponent);
    Object.assign(this.textFieldProps,
      this.propsNotForTextFieldComponent,
      this.staticPropsForTextFieldComponent);
  }


  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Autocomplete
          ref={this.componentRef}
          {...(this.placeStaticProps(this.autocompleteProps))}
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

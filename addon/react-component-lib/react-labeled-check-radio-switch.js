import React from 'react';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactBase } from './base/react-base';
import {
  FormControlLabelProps, FormControlLabelStateProps, FormControlLabelPropsNotForComponent, FormControlLabelStatePropsNotForComponent
} from '../react-component-lib/utility/props/form-control-label-props';
export class ReactLabeledCheckRadioSwitch extends ReactBase{
  constructor(props) {
    super(props);
  }

  initialize(controlProps, controlPropsNotForComponent, controlStateProps, controlStatePropsNotForComponent) {
    let formLabelProps = FormControlLabelProps();
    let formLabelPropsNotForComponent = FormControlLabelPropsNotForComponent();
    let formLabelStateProps = FormControlLabelStateProps();
    let formStatePropsNotForComponent = FormControlLabelStatePropsNotForComponent();

    this.staticFormLabelProps = {};
    this.statePropsForFormLabelComponent = {};
    let statePropsFormLabelNotForComponent = {};
    this.staticControlProps = {};
    this.statePropsForControlComponent = {};
    let statePropsControlNotForComponent = {};

    for (let propName in this.props) {
      //load FormLabel
      if (Object.prototype.hasOwnProperty.call(formLabelProps,propName)) {
        if (Object.prototype.hasOwnProperty.call(formLabelStateProps,propName)) {
          this.statePropsForFormLabelComponent[propName] = this.props[propName];
        } else {
          if (Object.prototype.hasOwnProperty.call(formStatePropsNotForComponent,propName)) {
            statePropsFormLabelNotForComponent[propName] = this.props[propName];
          } else {
            if (!Object.prototype.hasOwnProperty.call(formLabelPropsNotForComponent,propName)) {
              this.staticFormLabelProps[propName] = this.props[propName];
            }
          }
        }
      }

      //load Control
      if (Object.prototype.hasOwnProperty.call(controlProps,propName)) {
        if (Object.prototype.hasOwnProperty.call(controlStateProps,propName)) {
          this.statePropsForControlComponent[propName] = this.props[propName];
        } else {
          if (Object.prototype.hasOwnProperty.call(controlStatePropsNotForComponent,propName)) {
            statePropsControlNotForComponent[propName] = this.props[propName];
          } else {
            if (!Object.prototype.hasOwnProperty.call(controlPropsNotForComponent,propName)) {
              this.staticControlProps[propName] = this.props[propName];
            }
          }
        }
      }
    } //end for propName

    this.state = Object.assign({},
                               this.statePropsForFormLabelComponent,
                               statePropsFormLabelNotForComponent,
                               this.statePropsForControlComponent,
                               statePropsControlNotForComponent);
  }

  render() {
    const {
      theme,
    } = this.state;

    const ControlTagName = this.DefaultComponentToRender;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <FormControlLabel
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticFormLabelProps))}
          {...(this.placeStateProps(this.statePropsForFormLabelComponent))}
          control={<ControlTagName
            {...(this.placeStaticProps(this.staticControlProps))}
            {...(this.placeStateProps(this.statePropsForControlComponent))}
          />}
        />
      </ReactConditionalThemeProvider>
    )
  }
}

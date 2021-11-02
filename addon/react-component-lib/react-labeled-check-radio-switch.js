import React from 'react';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactBase } from './base/react-base';
import { FormControlLabelPropObj } from '../prop-files/form-control-label-props';
import { reactPropSifter } from "./utility/react-prop-sifter";

export class ReactLabeledCheckRadioSwitch extends ReactBase{
  constructor(props) {
    super(props);
  }

  initialize(controlPropObj) {
    const formControlLabelSifted = reactPropSifter(this.props, FormControlLabelPropObj, false);
    const controlPropSifted = reactPropSifter(this.props, controlPropObj);
    this.state = Object.assign({},
      formControlLabelSifted.stateProps,
      formControlLabelSifted.statefulPropsNotForComponent,
      controlPropSifted.stateProps,
      controlPropSifted.statefulPropsNotForComponent);

    this.staticFormLabelProps = formControlLabelSifted.staticProps;
    this.statePropsForFormLabelComponent = formControlLabelSifted.stateProps;
    this.staticControlProps = controlPropSifted.staticProps;
    this.statePropsForControlComponent = controlPropSifted.stateProps;

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

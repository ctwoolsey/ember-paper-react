import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { ReactBase } from './base/react-base';
import { SelectPropObj } from '../prop-files/select-props';
import { FormControlPropObj } from "../prop-files/form-control-props";
import { InputLabelPropObj} from "../prop-files/input-label-props";
import React from "react";
import { reactPropSifter } from "./utility/react-prop-sifter";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";


export class ReactSelect extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Select;
    this.initialize();
  }

  initialize() {
    const siftedFormControlProps = reactPropSifter(this.props, FormControlPropObj);
    const siftedInputLabelProps = reactPropSifter(this.props, InputLabelPropObj);
    const siftedSelectProps = reactPropSifter(this.props, SelectPropObj);

    delete siftedFormControlProps.ref;
    delete siftedInputLabelProps.ref;

    this.state = Object.assign({},
      siftedSelectProps.stateProps,
      siftedSelectProps.statefulPropsNotForComponent,
      siftedInputLabelProps.stateProps,
      siftedInputLabelProps.statefulPropsNotForComponent,
      siftedFormControlProps.stateProps,
      siftedFormControlProps.statefulPropsNotForComponent);
    this.staticSelectProps = siftedSelectProps.staticProps;
    this.staticInputLabelProps = siftedInputLabelProps.staticProps;
    this.staticFormControlProps = siftedFormControlProps.staticProps;
    this.stateSelectProps = siftedSelectProps.stateProps;
    this.stateInputLabelProps = siftedInputLabelProps.stateProps;
    this.stateFormControlProps = siftedFormControlProps.stateProps;
  }


  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <FormControl
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticFormControlProps))}
          {...(this.placeStateProps(this.stateFormControlProps))}
        >
          <InputLabel
            {...(this.placeStaticProps(this.staticInputLabelProps))}
            {...(this.placeStateProps(this.stateInputLabelProps))}
            id={this.stateSelectProps.labelId}
          >{this.stateSelectProps.label}</InputLabel>
          <Select
            {...(this.placeStaticProps(this.staticSelectProps))}
            {...(this.placeStateProps(this.stateSelectProps))}
          >
            {this.renderChildren()}
          </Select>
        </FormControl>
      </ReactConditionalThemeProvider>
    );
  }
}

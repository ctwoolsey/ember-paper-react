import React from 'react';
import TextField from '@mui/material/TextField';
import { ReactBase } from "./base/react-base";
import { TextFieldStateProps, TextFieldPropsNotForComponent } from "./utility/props/text-field-props";

export class ReactTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(TextFieldStateProps(), TextFieldPropsNotForComponent());
  }

  renderComponent() {
    return (
      <TextField
        ref={this.componentRef}
        {...(this.placeProps())}
        {...(this.placeStateProps())}
      >
        <option>Dummy Option</option>
      </TextField>
    )
  }
}

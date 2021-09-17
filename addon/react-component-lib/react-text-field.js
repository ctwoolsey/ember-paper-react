import React from 'react';
import TextField from '@mui/material/TextField';
import { ReactBase } from './base/react-base';
import { TextFieldStateProps, TextFieldPropsNotForComponent, TextFieldStatePropsNotForComponent } from './utility/props/text-field-props';

export class ReactTextField extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(TextFieldStateProps(), TextFieldPropsNotForComponent(), TextFieldStatePropsNotForComponent());
  }

  renderComponent() {
    return (
      <TextField
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        <option>Dummy Option</option>
      </TextField>
    )
  }
}

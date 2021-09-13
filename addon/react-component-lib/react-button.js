import React from 'react';
import Button from '@material-ui/core/Button';
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import { ButtonStateProps } from "./utility/props/button-props";
import { ReactBase } from "./base/react-base";

export class ReactButton extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(ButtonStateProps);
  }

  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Button
          ref={this.componentRef}
          {...(this.placeProps())}
          {...(this.placeStateProps())}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

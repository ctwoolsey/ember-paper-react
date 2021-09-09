import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ReactBase } from "./base/react-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import { PaperStateProps } from "./utility/props/paper-props";

export class ReactPaper extends ReactBase{
  constructor(props) {
    super(props);
    this.initializeState(PaperStateProps)
    this.addedEmberChildren = false;
  }

  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Paper
          ref={this.componentRef}
          {...(this.placeProps())}
          {...(this.placeStateProps())}
        >
        </Paper>
      </ReactConditionalThemeProvider>
    );
  }

}

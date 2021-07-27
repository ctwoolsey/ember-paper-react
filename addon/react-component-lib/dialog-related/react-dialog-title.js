import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ReactDialogHelperBase } from "../base/react-dialog-helper-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";
import DialogActions from "@material-ui/core/DialogActions";

export class ReactDialogTitle extends ReactDialogHelperBase{
  constructor(props) {
    super(props);
  }

  render() {
    const {
      sx,
      theme,
      classString
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <DialogTitle
          {...(classString ? {className: classString} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

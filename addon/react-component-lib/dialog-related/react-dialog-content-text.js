import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ReactDialogHelperBase } from "../base/react-dialog-helper-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactDialogContentText extends ReactDialogHelperBase{
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
        <DialogContentText
          {...(classString ? {className: classString} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

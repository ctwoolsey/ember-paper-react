import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ReactDialogHelperBase } from "../base/react-dialog-helper-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

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
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import { ReactDialogHelperBase } from "../base/react-dialog-helper-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactDialogContent extends ReactDialogHelperBase{
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
        <DialogContent
                       {...(classString ? {className: classString} : {})}
                       {...(this.props.dividers ? {dividers: this.props.dividers} : {})}
                       {...(sx ? {sx: sx} : {})}
                       ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

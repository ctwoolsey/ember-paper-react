import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import { ReactDialogHelperBase } from '../base/react-dialog-helper-base';
import { ReactConditionalThemeProvider } from '../react-conditional-theme-provider';

export class ReactDialogActions extends ReactDialogHelperBase{
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
        <DialogActions
          {...(classString ? {className: classString} : {})}
          {...(this.props.disableSpacing ? {disableSpacing: this.props.disableSpacing} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        >
        </DialogActions>
      </ReactConditionalThemeProvider>
    );
  }
}

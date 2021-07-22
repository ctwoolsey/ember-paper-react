import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import { ReactThemeBase } from "../base/react-theme-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactDialogActions extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.state = {
      classString: props.class,
      sx: props.sx,
      theme: props.theme
    };

    this.componentRef = React.createRef();

    //methods
    this.setClass = this.setClass.bind(this);
    this.setSx = this.setSx.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setSx(sx) {
    this.setState( {sx: sx});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
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
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

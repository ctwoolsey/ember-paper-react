import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import { ReactBaseWithTheme } from "../base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactCardActions extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classString,
      sx,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <CardActions
          onClick={this.props.onClick}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.disableSpacing ? {disableSpacing: this.props.disableSpacing} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

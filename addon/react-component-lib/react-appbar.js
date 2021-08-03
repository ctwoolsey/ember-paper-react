import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactAppbar extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        color: props.color,
        position: props.position
      });

  }

  render() {
    const {
      classString,
      color,
      position,
      sx,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Appbar
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(color ? {color: color} : {})}
          {...(this.props.enableColorOnDark ? {enableColorOnDark: this.props.enableColorOnDark} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(position ? {position: position} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

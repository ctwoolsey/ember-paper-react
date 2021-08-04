import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { ReactBaseWithTheme } from "../base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactCardContent extends ReactBaseWithTheme{
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
        <CardContent
          onClick={this.props.onClick}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ReactBase } from "./base/react-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactPaper extends ReactBase{
  constructor(props) {
    super(props);
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

  /*render() {
    const {
      classString,
      elevation,
      square,
      sx,
      theme,
      variant
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Paper
          ref={this.componentRef}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(elevation ? {elevation: elevation} : {})}
          {...(square ? {square: square} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
        >
        </Paper>
      </ReactConditionalThemeProvider>
    );
  }*/
}

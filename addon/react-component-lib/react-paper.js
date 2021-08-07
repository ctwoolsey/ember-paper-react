import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactPaper extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.addedEmberChildren = false;
    this.state = {
      classString: props.classString,
      elevation: props.elevation,
      square: props.square,
      sx: props.sx,
      theme: props.theme,
      variant: props.variant
    };

    this.componentRef = React.createRef();

  }

  render() {
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
  }
}

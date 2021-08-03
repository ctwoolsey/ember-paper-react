import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactCircularProgress extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        color: props.color,
        size: props.size,
        value: props.value,
        variant: props.variant
      });

  }

  render() {
    const {
      classString,
      color,
      size,
      sx,
      value,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <CircularProgress
          {...(classString ? {className: classString} : {})}
          {...(color ? {color: color} : {})}
          {...(this.props.disableShrink ? {disableShrink: this.props.disableShrink} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(size ? {size: size} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.thickness ? {thickness: this.props.thickness} : {})}
          {...(value ? {value: value} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

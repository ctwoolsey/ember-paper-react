import React from 'react';
import Button from '@material-ui/core/Button';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactButton extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        color: props.color,
        disabled: props.disabled,
        disableElevation: props.disableElevation,
        disableFocusRipple: props.disableFocusRipple,
        disableRipple: props.disableRipple,
        fullWidth: props.fullWidth,
        href: props.href,
        size: props.size,
        variant: props.variant
      });

    this.componentRef = React.createRef();

    //methods
    this.setColor = this.setColor.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisableElevation = this.setDisableElevation.bind(this);
    this.setDisableFocusRipple = this.setDisableFocusRipple.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
    this.setHref = this.setHref.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setVariant = this.setVariant.bind(this);
  }

  setColor(color) {
    this.setState( {color: color});
  }

  setDisabled(disabled) {
    this.setState({ disabled: disabled });
  }

  setDisableElevation(disableElevation) {
    this.setState( {disableElevation: disableElevation});
  }

  setDisableFocusRipple(disableFocusRipple) {
    this.setState( {disableFocusRipple: disableFocusRipple});
  }

  setDisableRipple(disableRipple) {
    this.setState( {disableRipple: disableRipple});
  }

  setFullWidth(fullWidth) {
    this.setState( {fullWidth: fullWidth});
  }

  setHref(href) {
    this.setState( {href: href});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setVariant(variant) {
    this.setState({ variant: variant});
  }

  render() {
    const {
      classString,
      color,
      disabled,
      disableElevation,
      disableFocusRipple,
      disableRipple,
      fullWidth,
      href,
      size,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Button
          onClick={this.props.onClick}
          {...(classString ? {className: classString} : {})}
          {...(color ? {color: color} : {})}
          disabled={disabled}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          href={href}
          {...(size ? {size: size} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

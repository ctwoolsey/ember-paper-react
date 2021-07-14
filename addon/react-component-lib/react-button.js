import React from 'react';
import Button from '@material-ui/core/Button';
import { ReactThemeBase } from "./base/react-theme-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactButton extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.state = { disabled: props.disabled,
                   variant: props.variant,
                   size: props.size,
                   href: props.href,
                   disableElevation: props.disableElevation,
                   disableFocusRipple: props.disableFocusRipple,
                   disableRipple: props.disableRipple,
                   fullWidth: props.fullWidth,
                   color: props.color,
                   theme: props.theme,
                   classString: props.class
                 };
    this.componentRef = React.createRef();

    //methods
    this.setDisabled = this.setDisabled.bind(this);
    this.setVariant = this.setVariant.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setHref = this.setHref.bind(this);
    this.setDisableElevation = this.setDisableElevation.bind(this);
    this.setDisableFocusRipple = this.setDisableFocusRipple.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setClass = this.setClass.bind(this);
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setDisabled(disabled) {
    this.setState({ disabled: disabled });
  }

  setVariant(variant) {
    this.setState({ variant: variant});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setHref(href) {
    this.setState( {href: href});
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

  setColor(color) {
    this.setState( {color: color});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
  }

  render() {
    const { disabled,
            variant,
            size,
            href,
            disableElevation,
            disableFocusRipple,
            disableRipple,
            fullWidth,
            color,
            theme,
            classString
          } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Button onClick={this.props.onclick}
                {...(classString ? {className: classString} : {})}
                {...(variant ? {variant: variant} : {})}
                {...(size ? {size: size} : {})}
                disabled={disabled}
                disableElevation={disableElevation}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                fullWidth={fullWidth}
                href={href}
                ref={this.componentRef}
                {...(color ? {color: color} : {})}>
          {this.props.value}
        </Button>
      </ReactConditionalThemeProvider>
    );
  }
}

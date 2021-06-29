import React from 'react';
import Button from '@material-ui/core/Button';
import {theme} from "../material-ui-theme/theme-creation";
import { ThemeProvider } from '@material-ui/core/styles';


export class ReactButton extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { disabled: this.props.disabled,
                   variant: this.props.variant,
                   size: this.props.size,
                   href: this.props.href,
                   disableElevation: this.props.disableElevation,
                   disableFocusRipple: this.props.disableFocusRipple,
                   disableRipple: this.props.disableRipple,
                   fullWidth: this.props.fullWidth
                 };
    this.buttonRef = React.createRef();

    //properties
    this.setDisabled = this.setDisabled.bind(this);
    this.setVariant = this.setVariant.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setHref = this.setHref.bind(this);
    this.setDisableElevation = this.setDisableElevation.bind(this);
    this.setDisableFocusRipple = this.setDisableFocusRipple.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
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

  render() {
    const { disabled,
            variant,
            size,
            href,
            disableElevation,
            disableFocusRipple,
            disableRipple,
            fullWidth
          } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Button onClick={this.props.onclick}
                {...(variant ? {variant: variant} : {})}
                size={size}
                disabled={disabled}
                disableElevation={disableElevation}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                fullWidth={fullWidth}
                href={href}
                ref={this.buttonRef}
                color="primary">
          {this.props.value}
        </Button>
      </ThemeProvider>
    );
  }
}

import React from 'react';
import Button from '@material-ui/core/Button';
import {theme} from "../material-ui-theme/theme-creation";
import { ThemeProvider } from '@material-ui/core/styles';


export class ReactButton extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { disabled: this.props.disabled };
    this.buttonRef = React.createRef();
    this.setDisabled = this.setDisabled.bind(this);
  }

  setDisabled(disabled) {
    this.setState({ disabled: disabled});
  }

  render() {
    const { disabled } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Button onClick={this.props.onclick}
                {...(this.props.variant ? {variant: this.props.variant} : {})}
                size={this.props.size}
                disabled={disabled}
                disableElevation={this.props.disableElevation}
                href={this.props.href}
                ref={this.buttonRef}
                color="primary">
          {this.props.value}
        </Button>
      </ThemeProvider>
    );
  }
}

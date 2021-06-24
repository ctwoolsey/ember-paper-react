import React from 'react';
import Button from '@material-ui/core/Button';
import {theme} from "../material-ui-theme/theme-creation";
import { ThemeProvider } from '@material-ui/core/styles';


export class ReactButtonOld extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    console.log('component mounted');
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button onClick={this.props.onclick}
                {...(this.props.variant ? {variant: this.props.variant} : {})}
                size={this.props.size}
                disabled={this.props.disabled}
                disableElevation={this.props.disableElevation}
                href={this.props.href}
                color="primary">
          {this.props.value}
        </Button>
      </ThemeProvider>
    );
  }
}

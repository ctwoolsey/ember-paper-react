import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

export class ReactConditionalThemeProvider extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.theme) {
      return (
        <ThemeProvider {...(this.props.theme ? { theme: this.props.theme } : {})}>
          {this.props.children}
        </ThemeProvider>
      )
    } else {
      return (
        this.props.children
      )
    }
  }
}

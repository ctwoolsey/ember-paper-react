import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

export function ReactThemeProvider(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const {theme, childRef, ...passThruProps } = this.props;
      this.state = {
        theme: theme
      };

      this.refProp = childRef;
      this.passThruProps = passThruProps;

      //properties
      this.setTheme = this.setTheme.bind(this);
    }

    setTheme(theme) {
      this.setState( {theme: theme});
    }

    render() {

      const {
        theme
      } = this.state;

      return (
        <ThemeProvider {...(theme ? { theme: theme } : {})}>
          <WrappedComponent {...(this.refProp ? { ref: this.refProp } : {})} {...this.passThruProps}/>
        </ThemeProvider>
      );
    }
  }
}


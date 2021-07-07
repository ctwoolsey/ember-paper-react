import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';

export class ReactCheckbox extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      color: this.props.color,
      theme: this.props.theme
    };
    this.componentRef = React.createRef();

    //properties
    this.setColor = this.setColor.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  setColor(color) {
    this.setState( {color: color});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
  }

  render() {
    const {
      color,
      theme
    } = this.state;

    /*
        span wrapping checkbox is needed because when the user clicks
        on the Checkbox component, material-ui clears out classes, so
        classes have to be added to this span.
     */
    return (
      <ThemeProvider {...(theme ? {theme: theme} : {})}>
        <span>
          <Checkbox
            onClick={this.props.onclick}
            ref={this.componentRef}
            {...(color ? {color: color} : {})}
          />
        </span>
      </ThemeProvider>
    );
  }
}

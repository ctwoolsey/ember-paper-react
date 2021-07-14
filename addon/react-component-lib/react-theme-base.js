import React from "react";

export class ReactThemeBase extends React.Component{
  constructor(props) {
    super(props);
    const {theme} = this.props;
    this.state = {
      theme: theme
    };

    //properties
    this.setTheme = this.setTheme.bind(this);
  }

   setTheme(theme) {
     this.setState( {theme: theme});
   }

  render() {
    return {};
  }
}

import { ReactThemeBase } from "./react-theme-base";
import React from "react";

export class ReactBaseWithTheme extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = Object.assign(this.state, {
      classString: props.classString,
      sx: props.sx
    });

    //methods
    this.setClass = this.setClass.bind(this);
    this.setSx = this.setSx.bind(this);
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setSx(sx) {
    this.setState( {sx: sx});
  }

  render() {
    return {};
  }
}

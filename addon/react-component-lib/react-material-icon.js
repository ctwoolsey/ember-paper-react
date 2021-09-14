import { MaterialIconStateProps, MaterialIconPropsNotForComponent } from "./utility/props/material-icon-props";
import { ReactBase } from "./base/react-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import React from "react";

export class ReactMaterialIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(MaterialIconStateProps(), MaterialIconPropsNotForComponent());
  }

  render() {
    const {
      theme,
      reactIcon
    } = this.state;

    const ReactMaterialIconComponent = reactIcon;
    return (
      <ReactConditionalThemeProvider theme={theme}>
        <ReactMaterialIconComponent
          ref={this.componentRef}
          {...(this.placeProps())}
          {...(this.placeStateProps())}
        />
      </ReactConditionalThemeProvider>
    );

  }
}

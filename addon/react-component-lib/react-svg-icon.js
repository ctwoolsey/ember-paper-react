import React from 'react';
import SvgIcon from '@mui/material/SvgIcon'
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import { ReactBase } from "./base/react-base";
import { SvgIconStateProps, SvgIconPropsNotForComponent } from "./utility/props/svg-icon-props";

export class ReactSvgIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(SvgIconStateProps(), SvgIconPropsNotForComponent());
  }

  render() {
    const {
      theme
    } = this.state;
    return (
      <ReactConditionalThemeProvider theme={theme}>
        <SvgIcon
          ref={this.componentRef}
          {...(this.placeProps())}
          {...(this.placeStateProps())}
        >
          <path d="" />
        </SvgIcon>
      </ReactConditionalThemeProvider>
    );
  }
}

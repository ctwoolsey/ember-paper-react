import IconButton from '@mui/material/IconButton';
import { ReactBase } from './base/react-base';
import { IconButtonPropObj } from '../prop-files/icon-button-props';
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import React from "react";

export class ReactIconButton extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = IconButton;
    this.initialize(IconButtonPropObj);
  }

  render() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <IconButton
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        >
          <span>Icon Will Replace This Whole Span</span>
        </IconButton>
      </ReactConditionalThemeProvider>
    );

  }
}

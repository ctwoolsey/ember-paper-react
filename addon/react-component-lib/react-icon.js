import React from 'react';
import Icon from '@mui/material/Icon';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { IconStateProps, IconPropsNotForComponent } from './utility/props/icon-props';

export class ReactIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(IconStateProps(), IconPropsNotForComponent());
  }

  render() {
    const {
      theme,
      iconName
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Icon
          ref={this.componentRef}
          {...(this.placeProps())}
          {...(this.placeStateProps())}
        >
          {iconName}
        </Icon>
      </ReactConditionalThemeProvider>
    );
  }
}

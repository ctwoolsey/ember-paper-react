import React from 'react';
import Icon from '@mui/material/Icon';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { IconPropObj } from '../prop-files/icon-props';

export class ReactIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(IconPropObj);
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
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        >
          {iconName}
        </Icon>
      </ReactConditionalThemeProvider>
    );
  }
}

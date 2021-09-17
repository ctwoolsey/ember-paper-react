import React from 'react';
import SvgIcon from '@mui/material/SvgIcon'
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactBase } from './base/react-base';
import { SvgIconStateProps, SvgIconPropsNotForComponent, SvgIconStatePropsNotForComponent } from './utility/props/svg-icon-props';

export class ReactSvgIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(SvgIconStateProps(), SvgIconPropsNotForComponent(), SvgIconStatePropsNotForComponent());
  }

  render() {
    const {
      theme
    } = this.state;
    return (
      <ReactConditionalThemeProvider theme={theme}>
        <SvgIcon
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        >
          <path d='' />
        </SvgIcon>
      </ReactConditionalThemeProvider>
    );
  }
}

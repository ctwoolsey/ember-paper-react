import { MaterialIconPropObj } from '../prop-files/material-icon-props';
import { ReactBase } from './base/react-base';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import React from 'react';
import { keepPositionOnUpdate } from "../decorators/for-react/keep-position-on-update";

@keepPositionOnUpdate
export class ReactMaterialIcon extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(MaterialIconPropObj);
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
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        />
      </ReactConditionalThemeProvider>
    );

  }
}

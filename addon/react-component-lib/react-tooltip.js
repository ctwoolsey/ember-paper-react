import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { ReactBase } from './base/react-base';
import {
  TooltipPropsNotForComponent,
  TooltipStateProps,
  TooltipStatePropsNotForComponent
} from './utility/props/tooltip-props';

export class ReactTooltip extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(TooltipStateProps(), TooltipPropsNotForComponent(), TooltipStatePropsNotForComponent());
  }

  createTitleMarkup() {
    const {
      title
    } = this.state;

    return {__html: title};
  }

  renderComponent() {
    return (
      <Tooltip
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
        title={
          <React.Fragment>
            <span dangerouslySetInnerHTML={this.createTitleMarkup()}></span>
          </React.Fragment>
        }
      >
        <span></span>
      </Tooltip>
    )
  }
}

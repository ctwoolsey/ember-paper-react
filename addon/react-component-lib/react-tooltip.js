import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { ReactBase } from "./base/react-base";
import {
  TooltipPropsNotForComponent,
  TooltipStateProps,
  TooltipStatePropsNotForComponent
} from "./utility/props/tooltip-props";

export class ReactTooltip extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(TooltipStateProps(), TooltipPropsNotForComponent(), TooltipStatePropsNotForComponent());
  }

  renderComponent() {
    const {
      disabled
    } = this.state;

    return (
      <Tooltip
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        <span>
          <Button {...(disabled ? { disabled: disabled} : {})}>Dummy Tooltip Child</Button>
        </span>
      </Tooltip>
    )
  }
}

import React from 'react';
import Menu from '@mui/material/Menu';
import { ReactChildrenHolder } from './utility/react-children-holder';
import { ReactBase } from './base/react-base';
import { DialogPropsNotForComponent, DialogStateProps, DialogStatePropsNotForComponent } from './utility/props/dialog-props';

export class ReactMenu extends ReactBase{
  constructor(props) {
    super(props);
    this.initialize(DialogStateProps(), DialogPropsNotForComponent(), DialogStatePropsNotForComponent());
  }

  renderComponent() {
    return (
      <Menu
        ref={this.componentRef}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        <ReactChildrenHolder
          {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
          {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
        />
      </Menu>
    )
  }
}

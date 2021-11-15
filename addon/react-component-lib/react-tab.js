import Tab from '@mui/material/Tab';
import { ReactBase } from './base/react-base';
import { TabPropObj } from '../prop-files/tab-props';
import { reactMayBelongToReactGroup } from "../decorators/for-react/react-may-belong-to-react-group";
import React from 'react';

@reactMayBelongToReactGroup
export class ReactTab extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Tab;
    this.initialize(TabPropObj);
  }

  renderComponent() {
    const ComponentToRender = this.DefaultComponentToRender;
    const { value } = this.state;
    return (
      <ComponentToRender
        ref={this.componentRef}
        id={`simple-tab-${value}`}
        aria-controls={`simple-tabpanel-${value}`}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      />
    )
  }
}

import TabPanel from '@mui/lab/TabPanel';
import { ReactBase } from './base/react-base';
import { TabPanelPropObj } from '../prop-files/tab-panel-props';
import React from 'react';

export class ReactTabPanel extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = TabPanel;
    this.initialize(TabPanelPropObj);
  }

  renderComponent() {
    const { value } = this.state;
    const { index } = this.staticProps;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        {this.renderChildren()}
      </div>
    )
  }
}

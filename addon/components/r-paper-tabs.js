import { ReactTabs } from '../react-component-lib/react-tabs'
import { TABS } from '../constants/tabs';
import { TabsPropObj } from '../prop-files/tabs-props';
import { reactGroup } from '../decorators/react-group';
import BaseEmberPaperReact from './base/base-ember-paper-react';

@reactGroup
export default class RPaperTabsComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = TABS.COMPONENT_TYPE;
    this.loadPropObject(TabsPropObj);
    this.reactElement = ReactTabs;
  }
}


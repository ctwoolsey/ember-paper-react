import { ReactTab } from '../react-component-lib/react-tab'
import { TAB } from '../constants/tab';
import { TabPropObj } from '../prop-files/tab-props';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";

@mayBelongToReactGroup
export default class RPaperTabComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = TAB.COMPONENT_TYPE;
    this.loadPropObject(TabPropObj);
    this.reactElement = ReactTab;
  }
}


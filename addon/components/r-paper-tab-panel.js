import { ReactTabPanel } from '../react-component-lib/react-tab-panel'
import { TAB_PANEL } from '../constants/tab-panel';
import { TabPanelPropObj } from '../prop-files/tab-panel-props';
import BaseInElementRender from './base/base-in-element-render';
import { mayBelongToReactGroup } from "../decorators/may-belong-to-react-group";
import { renderLater } from '../decorators/render-later';

@mayBelongToReactGroup
@renderLater
export default class RPaperTabPanelComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = TAB_PANEL.COMPONENT_TYPE;
    this.loadPropObject(TabPanelPropObj);
    this.reactElement = ReactTabPanel;
  }
}


import { ReactAlertTitle } from '../react-component-lib/react-alert-title'
import { ALERT_TITLE } from '../constants/alert-title';
import { AlertTitlePropObj } from '../prop-files/alert-title-props';
import BaseInElementRender from './base/base-in-element-render';

export default class RPaperAlertTitleComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = ALERT_TITLE.COMPONENT_TYPE;
    this.loadPropObject(AlertTitlePropObj);
    this.reactElement = ReactAlertTitle;
  }
}


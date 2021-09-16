import { ReactCardActionArea } from '../react-component-lib/card-related/react-card-action-area';
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from '@ember/object';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseReactEmberComponent from './base/base-react-ember';

export default class RPaperCardActionAreaComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTION_AREA;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      action: this.args.action || null,
      centerRipple: this.args.centerRipple || null,
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      disabled: this.args.disabled || false,
      disableRipple: this.args.disableRipple || null,
      disableTouchRipple: this.args.disableTouchRipple || null,
      focusRipple: this.args.focusRipple || null,
      focusVisibleClassName: this.args.focusVisibleClassName || null,
      id: this.findElementId(),
      linkComponent: this.args.linkComponent || null,
      onClick: this.handleClickChange,
      onFocusVisible: this.args.onFocusVisible || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      touchRippleProps: this.args.touchRippleProps || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactCardActionArea {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}



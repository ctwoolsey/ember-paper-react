import { ReactCardActions } from '../react-component-lib/card-related/react-card-actions';
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from '@ember/object';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseReactEmberComponent from './base/base-react-ember';

export default class RPaperCardActionsComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_ACTIONS;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      disableSpacing: this.args.disableSpacing || false,
      id: this.findElementId(),
      onClick: this.handleClickChange,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactCardActions {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}



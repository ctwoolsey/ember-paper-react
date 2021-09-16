import { ReactCard } from '../react-component-lib/card-related/react-card';
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from '@ember/object';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseReactEmberComponent from './base/base-react-ember';

export default class RPaperCardComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      elevation: this.args.elevation || false,
      id: this.findElementId(),
      raised: this.args.raised || null,
      square: this.args.square || null,
      onClick: this.handleClickChange,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef,
    }

    const reactPortal = ReactDOM.createPortal(<ReactCard {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}


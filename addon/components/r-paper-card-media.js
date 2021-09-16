import { ReactCardMedia } from '../react-component-lib/card-related/react-card-media';
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from '@ember/object';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseReactEmberComponent from './base/base-react-ember';

export default class RPaperCardMediaComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_MEDIA;
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      image: this.args.image || false,
      id: this.findElementId(),
      onClick: this.handleClickChange,
      src: this.args.src || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      title: this.args.title || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactCardMedia {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}



import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactIcon } from "../react-component-lib/react-icon";

export default class RPaperIconComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.ICON;
    if (this.args.hasPath) {
      this.renderChildren = this.renderPathChildren;
    }
  }

  renderPathChildren() {
    if (this.args.hasPath) {
      const svgChildNodes = this.reactRef.current.componentRef.current.childNodes;
      let svgPath = null;
      for(let i = 0; i < svgChildNodes.length; i++) {
        if (svgChildNodes[i].nodeName.toUpperCase() === 'PATH') {
          svgPath = svgChildNodes[i];
        }
      }
      for(let i = 0; i < this.childrenFragment.childNodes.length; i++) {
        if (this.childrenFragment.childNodes[i].nodeName .toUpperCase() === 'PATH') {
          svgPath.setAttribute('d', this.childrenFragment.childNodes[i].getAttribute('d'));
        }
      }
    }
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      baseClassName: this.args.baseClassName || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      children: this.args.children || null,
      color: this.args.color || null,
      component: this.args.component || null,
      fontSize: this.args.fontSize || null,
      hasPath: this.args.hasPath || false,
      reactIcon: this.args.reactIcon || null,
      iconName: this.args.iconName || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      ref: this.reactRef
    }

    const reactPortal = ReactDOM.createPortal(<ReactIcon {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));

  }

}


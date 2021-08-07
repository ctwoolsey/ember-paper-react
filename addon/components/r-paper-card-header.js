import { ReactCardHeader } from "../react-component-lib/card-related/react-card-header";
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperCardHeaderComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_HEADER;
    this.reactComponentFragments = {
      avatar: null,
      action: null
    }
    this.renderReactAttributeComponents = this.renderReactAttributeComponents.bind(this);
  }

  renderReactAttributeComponents() {
    if (this.reactComponentFragments.avatar) {
      this.reactRef.current.componentRef.current.getElementsByClassName('MuiCardHeader-avatar')[0].replaceChildren(this.reactComponentFragments.avatar);
    }
  }

  renderChildren() {

  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      action: this.args.action || null,
      avatar: this.args.avatar || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      disableTypography: this.args.disableTypography || false,
      subheader: this.args.subheader || false,
      subheaderTypographyProps: this.args.subheaderTypographyProps || false,
      id: this.findElementId(),
      onClick: this.handleClickChange,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      title: this.args.title || null,
      titleTypographyProps: this.args.titleTypographyProps || null,
      ref: this.reactRef,
      renderAttributeComponents: this.renderReactAttributeComponents
    }

    const reactPortal = ReactDOM.createPortal(<ReactCardHeader {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}



import { ReactCardHeader } from "../react-component-lib/card-related/react-card-header";
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperCardHeaderComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_HEADER;
    this.reactComponentFragments = {}
    this.renderReactAttributeComponents = this.renderReactAttributeComponents.bind(this);
  }

  renderReactAttributeComponents() {
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.AVATAR, 'MuiCardHeader-avatar');
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.ACTION, 'MuiCardHeader-action');
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.SUBHEADER, 'MuiCardHeader-subheader');
    this.renderReactAttributeComponent(REACT_ATTRIBUTE_COMPONENTS.TITLE, 'MuiCardHeader-title');
  }

  renderChildren() {
      //intentionally empty
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



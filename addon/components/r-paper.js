import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import { PaperProps, CommonProps } from "../react-component-lib/utility/prop-files";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactPaper } from "../react-component-lib/react-paper";

export default class RPaperComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.PAPER;
    this.handleClickChange = null;
    //let something = [...this.args];
    //console.log('Count: ' + something.length);
  }

  renderChildren() {
    this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
  }

  @action
  inserted(element) {
    super.inserted(element);
    let props = Object.assign({}, CommonProps, PaperProps);
    this.initializeProps(props);
    this.initializeCommonProps(props);

    /*let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      component: this.args.component || null,
      elevation: this.args.elevation || null,
      id: this.findElementId(),
      square: this.args.square || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef
    };*/

    const reactPortal = ReactDOM.createPortal(<ReactPaper {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }
}

/*
{{did-update this.class @class}}
  {{did-update this.style @style}}
{{did-update (fn this.setReactState 'elevation' @elevation) @elevation}}
  {{did-update this.square @square}}
  {{did-update this.sx @sx}}
  {{did-update this.variant @variant}}
  {{did-update this.globalThemeChanged this.themeManager.theme}}
* */







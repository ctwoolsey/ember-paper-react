import {ReactButton} from "../react-component-lib/react-button"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperButton extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BUTTON;
  }

  /* end material-ui properties */

  /*
    Once rendered, the block content from this ember component is inserted into the appropriate area of the
    React button component.

    Then the react button is inserted back into this r-paper-button component but next to the template's html.
    For clean up, the original r-paper-button html is removed leaving only the React button component with the
    Ember block content inside of it.
   */

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      classString: this.initializeAndMergeClassWithClassString() || '',
      color: this.args.color || null,
      disabled: this.args.disabled || false,
      disableElevation: this.args.disableElevation || null,
      disableFocusRipple: this.args.disableFocusRipple || null,
      disableRipple: this.args.disableRipple || null,
      fullWidth: this.args.fullWidth || null,
      href: this.args.href || null,
      onClick: this.handleClickChange,
      size: this.args.size || '',
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef,
      id: this.findElementId()
    }
    /*
      React attaches events to the parent container, so by creating a portal and then rendering,
      the element is not placed into this r-paper-button, but at the end of the parent of r-paper-button.
      For inspiration:
      https://stackoverflow.com/questions/30686796/react-render-replace-container-instead-of-inserting-into/58385910#58385910

     */
    const reactPortal = ReactDOM.createPortal(<ReactButton {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}

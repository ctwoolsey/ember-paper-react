import Component from '@glimmer/component';
import {ReactButton} from "../vendor/react-component-lib/react-button"
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";


export default class RPaperButton extends Component {
  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.el = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.args.onClick() || null;
  }

  /*
    Once rendered, the block content from this ember component is inserted into the appropriate area of the
    React button component.

    Then the react button is inserted back into this r-paper-button component but next to the template's html.
    For clean up, the original r-paper-button html is removed leaving only the React button component with the
    Ember block content inside of it.
   */
  renderElement() {
    if (this.el.hasChildNodes()) {
      this.reactRef.current.getElementsByClassName('MuiButton-label')[0].appendChild(this.fragmentFromBlockContent());
    }
    this.el.insertAdjacentElement('afterend', this.reactRef.current);
    this.el.remove();
  }

  fragmentFromBlockContent() {
    let fragment = document.createDocumentFragment();
    while (this.el.hasChildNodes()) {
      fragment.appendChild(this.el.firstChild);
    }

    return fragment;
  }

  @action
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    let size = this.args.size || '';
    let variant = this.args.variant || null;
    let disabled = this.args.disabled || false;
    let href = this.args.href || null;
    let disableElevation = this.args.disableElevation || null;
    this.reactRef = React.createRef();

    /*
      React attaches events to the parent container, so by creating a portal and then rendering,
      the element is not placed into this r-paper-button, but at the end of the parent of r-paper-button.
      For inspiration:
      https://stackoverflow.com/questions/30686796/react-render-replace-container-instead-of-inserting-into/58385910#58385910

      once rendered, the runloop will call renderElement() for further processing.

     */
    const reactButtonPortal = ReactDOM.createPortal(<ReactButton variant={variant}
                                                                           size={size}
                                                                           disabled={disabled}
                                                                           disableElevation={disableElevation}
                                                                           href={href}
                                                                           myRef={this.reactRef}
                                                                           onclick={this.handleClick}/>, element.parentElement);
    ReactDOM.render(reactButtonPortal, document.createElement('div'));
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.ref);
    super.willDestroy();
  }
}

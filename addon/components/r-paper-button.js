import Component from '@glimmer/component';
import {ReactButton} from "../vendor/react-component-lib/react-button"
import ReactDOM from 'react-dom';
import React from 'react';
import YieldWrapper from "../private/yield-wrapper";
import { schedule } from "@ember/runloop";
import { action } from "@ember/object";


export default class RPaperButton extends Component {
  constructor() {
    super(...arguments);
    this.ref = null;
    this.fragment = null;
    this.el = null;
  }

  handleClick() {
    return this.args.onClick() || null;
  }

  renderElement() {
    console.log('rendered');
    this.ref.current.getElementsByClassName('MuiButton-label')[0].appendChild(this.fragment);

    //this.removeContainingDiv();
  }

  removeContainingDiv() {
    let fragment = document.createDocumentFragment();
    while(this.el.firstChild) {
      fragment.appendChild(this.el.firstChild);
    }
    this.el.parentNode.replaceChild(fragment, this.el);
  }



  @action
  inserted(element) {
    this.el = element;
    console.log('Button was inserted');
    schedule('render', () => this.renderElement());
    this.fragment = document.createDocumentFragment();
    let elNodes = document.getElementById('placeDiv').childNodes;
    for (let node of elNodes) {
      this.fragment.appendChild(node);
    }


    this.handleClick = this.handleClick.bind(this);
    let size = this.args.size || '';
    let variant = this.args.variant || null;
    let disabled = this.args.disabled || false;
    let href = this.args.href || null;
    let disableElevation = this.args.disableElevation || null;
    this.ref = React.createRef();
    ReactDOM.render(<ReactButton variant={variant}
                                 size={size}
                                 disabled={disabled}
                                 disableElevation={disableElevation}
                                 href={href}
                                 ref={this.ref}
                                 onclick={this.handleClick}/>, element);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    super.willDestroy();
  }
}

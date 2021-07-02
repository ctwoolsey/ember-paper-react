import Component from '@glimmer/component';
import { ReactCheckbox } from "../react-component-lib/react-checkbox";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import {inject as service} from '@ember/service';

export default class RPaperCheckbox extends Component {
  @service() themeManager;

  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.el = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return (this.args.onClick && this.args.onClick()) || null;
  }

  @action
  localThemeChanged() {
    if (this.reactRef) {
      this.reactRef.current.setTheme(this.useTheme());
    }
  }

  @action
  globalThemeChanged() {
    if (this.reactRef) {
      this.reactRef.current.setTheme(this.useTheme());
    }
  }

  useTheme() {
    return this.args.theme || this.themeManager.theme || null;
  }

  renderElement() {
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.el.remove();
  }

  cloneAttributes(target, source) {
    [...source.attributes].forEach( attr => {
      if (attr.nodeName === 'class') {
        source.classList.forEach(className => {
          target.classList.add(className);
        });
      } else
      if (attr.nodeName === 'style') {
        let styleArr = attr.nodeValue.split(';');
        styleArr.forEach(style => {
          let stylePieces = style.split(':');
          target.style[stylePieces[0]] = stylePieces[1];

        });
      } else {
        target.setAttribute(attr.nodeName, attr.nodeValue)
      }
    });
  }

  @action
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    //let theme = this.args.theme || null;
    let theme = this.useTheme(); //this.themeManager.theme;//this.themeToUse(); //this.themeManager.theme || this.args.theme || null;
    this.reactRef = React.createRef();

    /*
      React attaches events to the parent container, so by creating a portal and then rendering,
      the element is not placed into this r-paper-button, but at the end of the parent of r-paper-button.
      For inspiration:
      https://stackoverflow.com/questions/30686796/react-render-replace-container-instead-of-inserting-into/58385910#58385910

      once rendered, the runloop will call renderElement() for further processing.

     */
    const reactPortal = ReactDOM.createPortal(<ReactCheckbox
                                                                 theme={theme}
                                                                 ref={this.reactRef}
                                                                 onclick={this.handleClick}
                                                                 />, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

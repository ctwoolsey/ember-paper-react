import Component from '@glimmer/component';
import { ReactCheckbox } from "../react-component-lib/react-checkbox";
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class RPaperCheckbox extends Component {
  @service themeManager;

  constructor() {
    super(...arguments);
    this.reactRef = null;
    this.el = null;
    this.handleClick = this.handleClick.bind(this);

    this.addedStyles = [];
    if (this.args.style) {
      this.addedStyles = this.args.style.split(';');
    }
  }

  handleClick() {
    return (this.args.onClick && this.args.onClick()) || null;
  }

  @action
  class() {
    if (this.reactRef) {
      this.reactRef.current.setClass(this.args.class || false);
    }
  }

  @action
  style() {
    if (this.reactRef) {
      //remove old style names
      this.addedStyles.forEach(styleItem => {
        let stylePieces = styleItem.split(':');
        this.reactRef.current.componentRef.current.style.removeProperty(stylePieces[0]);
      });
      //save new style list
      this.addedStyles = this.args.style.split(';');
      this.addedStyles.forEach(styleItem => {
        let stylePieces = styleItem.split(':');
        this.reactRef.current.componentRef.current.style[stylePieces[0]] = stylePieces[1];
      });

    }
  }

  @action
  color() {
    if (this.reactRef) {
      this.reactRef.current.setColor(this.args.color || null);
    }
  }

  @action
  checked() {
    if (this.reactRef) {
      //this.reactRef.current.setChecked(this.args.checked || null);
    }
  }

  @action
  globalThemeChanged() {
    if (this.reactRef) {
      this.reactRef.current.setTheme(this.themeManager.theme);
    }
  }

  renderElement() {
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();
    this.el.remove();
  }

  cloneAttributes(target, source) {
    [...source.attributes].forEach( attr => {
      if (attr.nodeName === 'style') {
        let styleArr = attr.nodeValue.split(';');
        styleArr.forEach(style => {
          let stylePieces = style.split(':');
          target.style[stylePieces[0]] = stylePieces[1];

        });
      } else if (attr.nodeName !== 'class') { //ignore class
        target.setAttribute(attr.nodeName, attr.nodeValue)
      }
    });
  }

  initializeDynamicStyles() {
    this.addedStyles.forEach(styleItem => {
      let stylePieces = styleItem.split(':');
      this.reactRef.current.componentRef.current.style[stylePieces[0]] = stylePieces[1];
    });
  }

  @action
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    let color = this.args.color || null;
    let theme = this.themeManager.theme || null;
    let classString = this.args.class || '';
    this.reactRef = React.createRef();

    /*
      React attaches events to the parent container, so by creating a portal and then rendering,
      the element is not placed into this r-paper-button, but at the end of the parent of r-paper-button.
      For inspiration:
      https://stackoverflow.com/questions/30686796/react-render-replace-container-instead-of-inserting-into/58385910#58385910

      once rendered, the runloop will call renderElement() for further processing.

     */
    const reactPortal = ReactDOM.createPortal(<ReactCheckbox
                                                 class={classString}
                                                 color={color}
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

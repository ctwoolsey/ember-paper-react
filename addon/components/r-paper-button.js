import Component from '@glimmer/component';
import {ReactButton} from "../react-component-lib/react-button"
import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class RPaperButton extends Component {
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

  /* material-ui properties */
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
  disabled() {
    if (this.reactRef) {
      this.reactRef.current.setDisabled(this.args.disabled || false);
    }
  }

  @action
  variant() {
    if (this.reactRef) {
      this.reactRef.current.setVariant(this.args.variant || null);
    }
  }

  @action
  size() {
    if (this.reactRef) {
      this.reactRef.current.setSize(this.args.size || '');
    }
  }

  @action
  href() {
    if (this.reactRef) {
      this.reactRef.current.setHref(this.args.href || null);
    }
  }

  @action
  disableElevation() {
    if (this.reactRef) {
      this.reactRef.current.setDisableElevation(this.args.disableElevation || null);
    }
  }

  @action
  disableFocusRipple() {
    if (this.reactRef) {
      this.reactRef.current.setDisableFocusRipple(this.args.disableFocusRipple || null);
    }
  }

  @action
  disableRipple() {
    if (this.reactRef) {
      this.reactRef.current.setDisableRipple(this.args.disableRipple || null);
    }
  }

  @action
  fullWidth() {
    if (this.reactRef) {
      this.reactRef.current.setFullWidth(this.args.fullWidth || null);
    }
  }

  @action
  color() {
    if (this.reactRef) {
      this.reactRef.current.setColor(this.args.color || null);
    }
  }

  @action
  globalThemeChanged() {
      if (this.reactRef) {
        this.reactRef.current.setTheme(this.themeManager.theme);
      }
  }

  /* end material-ui properties */

  /*
    Once rendered, the block content from this ember component is inserted into the appropriate area of the
    React button component.

    Then the react button is inserted back into this r-paper-button component but next to the template's html.
    For clean up, the original r-paper-button html is removed leaving only the React button component with the
    Ember block content inside of it.
   */
  renderElement() {
    if (this.el.hasChildNodes()) {
      this.reactRef.current.componentRef.current.getElementsByClassName('MuiButton-label')[0].appendChild(this.fragmentFromBlockContent());
    }
    this.el.insertAdjacentElement('afterend', this.reactRef.current.componentRef.current);
    this.cloneAttributes(this.reactRef.current.componentRef.current, this.el);
    this.initializeDynamicStyles();
    this.el.remove();
  }

  fragmentFromBlockContent() {
    let fragment = document.createDocumentFragment();
    while (this.el.hasChildNodes()) {
      fragment.appendChild(this.el.firstChild);
    }

    return fragment;
  }

  cloneAttributes(target, source) {
    [...source.attributes].forEach( attr => {
      if (attr.nodeName === 'style') {
        let styleArr = attr.nodeValue.split(';');
        styleArr.forEach(style => {
          let stylePieces = style.split(':');
          target.style[stylePieces[0]] = stylePieces[1];

        });
      } else if (attr.nodeName !== 'class'){  // ignore class
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

    let size = this.args.size || '';
    let variant = this.args.variant || null;
    let disabled = this.args.disabled || false;
    let href = this.args.href || null;
    let disableElevation = this.args.disableElevation || null;
    let disableFocusRipple = this.args.disableFocusRipple || null;
    let disableRipple = this.args.disableRipple || null;
    let fullWidth = this.args.fullWidth || null;
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
    const reactPortal = ReactDOM.createPortal(<ReactButton
                                                 class={classString}
                                                 variant={variant}
                                                 size={size}
                                                 disabled={disabled}
                                                 disableElevation={disableElevation}
                                                 disableFocusRipple={disableFocusRipple}
                                                 disableRipple={disableRipple}
                                                 fullWidth={fullWidth}
                                                 color={color}
                                                 theme={theme}
                                                 href={href}
                                                 ref={this.reactRef}
                                                 onclick={this.handleClick}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.reactRef);
    super.willDestroy();
  }

}

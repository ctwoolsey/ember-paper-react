import {ReactAvatarGroup} from "../react-component-lib/react-avatar-group"
import {ReactAvatar} from "../react-component-lib/react-avatar"
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES, AVATAR_GROUP } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";

export default class RPaperAvatarGroupComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AVATAR_GROUP;
    this.doneRendering = this.doneRendering.bind(this);
    this.renderAdditionalItems = this.renderAdditionalItems.bind(this);
    this.styleSheetRemoved = false;
    this.avatarCountMarkerFragment = null;
    this.avatarCountMarkerIndex = null;
  }

  renderAdditionalItems() {
    console.log('rendering addtional items in avatar group');
    this.removeStyleSheetForLastAvatarChild();
  }

  doneRendering() {
    console.log('done rendering Avater Group');
    const avatarElements = this.reactRef.current.componentRef.current.getElementsByClassName(COMPONENT_TYPES.AVATAR);
    const avatarChildrenCount = avatarElements.length;
    let maxAvatars = AVATAR_GROUP.DEFAULT_MAX_AVATARS;
    if (this.args.max) {
      maxAvatars = this.args.max <= 1 ? 2 : this.args.max;
    }

    for(let i = 0; i < avatarElements.length; i++) {
      let avatar = avatarElements[i];
      avatar.classList.remove('hide-avatar');
      if (this.avatarCountMarkerIndex && this.avatarCountMarkerIndex === i) {
        avatar.replaceChildren(this.avatarCountMarkerFragment);
        this.avatarCountMarkerFragment = null;
        this.avatarCountMarkerIndex = null;
      }
    }

    if (avatarChildrenCount > maxAvatars) {
      const avatarIndexToChange = maxAvatars - 1;
      const extraAvatars = avatarChildrenCount - maxAvatars + 1;
      for (let i = avatarChildrenCount - 1; i >= avatarIndexToChange; i--) {
        if (i === avatarIndexToChange) {
          const extraAvatarsToIndicate = '+'+extraAvatars;
          this.avatarCountMarkerIndex = i;
          this.avatarCountMarkerFragment = document.createDocumentFragment();
          this.avatarCountMarkerFragment.appendChild(avatarElements[i].firstChild);
          avatarElements[i].replaceChildren(document.createTextNode(extraAvatarsToIndicate));
        } else {
          avatarElements[i].classList.add('hide-avatar');
        }
      }
    }
  }

  removeStyleSheetForLastAvatarChild() {
    if (!this.styleSheetRemoved) {
      this.styleSheetRemoved = true;
      const classList = this.reactRef.current.componentRef.current.classList;
      const classToMatch = /^css-(.)*-MuiAvatarGroup-root$/
      let matchingClass = '';
      classList.forEach((className) => {
        if (classToMatch.test(className)) {
          matchingClass = className;
        }
      });
      const styleToMatch = '.' + matchingClass + ' .MuiAvatar-root:last-child';
      for (let i = 0; i < document.styleSheets.length; i++) {
        let sheet = document.styleSheets[i];
        if (!sheet.href) {
          const first_rule = sheet.cssRules[0];
          if (first_rule && (first_rule.selectorText === styleToMatch)) {
            sheet.removeRule(0);
            break;
          }
        }
      }
    }
  }

  @action
  max() {
    this.doneRendering();
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      children: this.args.children || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      spacing: this.args.spacing || false,
      onClick: this.handleClickChange,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      variant: this.args.variant || null,
      ref: this.reactRef,
      id: this.findElementId()
    }

    const reactPortal = ReactDOM.createPortal(<ReactAvatarGroup {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }

}


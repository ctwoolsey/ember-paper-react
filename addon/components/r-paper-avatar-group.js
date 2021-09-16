import {ReactAvatarGroup} from '../react-component-lib/react-avatar-group'
import { action } from '@ember/object';
import { COMPONENT_TYPES, AVATAR_GROUP } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { AvatarGroupProps, AvatarGroupStateProps, AvatarGroupNotForComponent } from '../react-component-lib/utility/props/avatar-group-props';

export default class RPaperAvatarGroupComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AVATAR_GROUP;

    this.props = AvatarGroupProps();
    this.stateProps = AvatarGroupStateProps();
    this.notForComponentProps = AvatarGroupNotForComponent();
    this.reactElement = ReactAvatarGroup;


    this.doneRendering = this.doneRendering.bind(this);
    this.renderAdditionalItems = this.renderAdditionalItems.bind(this);
    this.applyGroupAttributesToAvatars = this.applyGroupAttributesToAvatars.bind(this);
    this.styleSheetRemoved = false;
    this.avatarCountMarkerFragment = null;
    this.avatarCountMarkerIndex = null;
    this.observer = null;
  }

  renderChildren() {
    this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
  }

  renderAdditionalItems() {
    this.removeStyleSheetForLastAvatarChild();
  }

  doneRendering() {
    this.applyGroupAttributesToAvatars();
    const childrenHolder = document.getElementById(this.childrenSpanId);
    const config = { attributes: false, childList: true, subtree: false };

    this.observer = new MutationObserver(() => {
      this.renderStack.renderLast();
      this.applyGroupAttributesToAvatars();
    });

    // Start observing the target node for configured mutations
    this.observer.observe(childrenHolder, config);
  }

  applyGroupAttributesToAvatars() {
    const avatarElements = this.reactRef.current.componentRef.current.getElementsByClassName(COMPONENT_TYPES.AVATAR);
    const avatarChildrenCount = avatarElements.length;
    let maxAvatars = AVATAR_GROUP.DEFAULT_MAX_AVATARS;
    if (this.args.max) {
      maxAvatars = this.args.max <= 1 ? 2 : this.args.max;
    }

    let marginLeft = null;
    if (this.args.spacing) {
      switch (this.args.spacing) {
        case 'small':
          marginLeft = '-8px';
          break;
        case 'large':
          marginLeft = '-16px';
          break;
        default:
          if (!isNaN(this.args.spacing)) {
            if (this.args.spacing !== 0) {
              marginLeft = -this.args.spacing;
            }
            marginLeft = marginLeft + 'px';
          }
      }
    }

    let variantClass = 'MuiAvatar-circular';
    if (this.args.variant) {
      variantClass = 'MuiAvatar-'+this.args.variant;
    }


    for(let i = 0; i < avatarElements.length; i++) {
      let avatar = avatarElements[i];
      if (marginLeft && i !== 0) {
        avatar.style.marginLeft = marginLeft;
      } else {
        avatar.style.removeProperty('margin-left');
      }

      avatar.classList.remove('MuiAvatar-circular');
      avatar.classList.remove('MuiAvatar-rounded');
      avatar.classList.remove('MuiAvatar-square');
      avatar.classList.add(variantClass);


      let zIndex = avatarElements.length - i;
      avatar.style.zIndex = zIndex;
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
    this.applyGroupAttributesToAvatars();
  }

  @action
  spacing() {
    this.applyGroupAttributesToAvatars();
  }

  @action
  variant() {
    this.applyGroupAttributesToAvatars();
  }

  willDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    super.willDestroy();
  }
}


import { once, scheduleOnce } from '@ember/runloop';
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactMenu } from '../react-component-lib/react-menu';
import { v4 as uuidv4 } from 'uuid';
import { tracked } from '@glimmer/tracking';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  MenuPropsProps,
  MenuPropsStateProps,
  MenuPropsPropsNotForComponent,
  MenuPropsStatePropsNotForComponent
} from '../react-component-lib/utility/props/menu-props';

export default class RPaperMenuComponent extends BaseEmberPaperReact {
  @tracked menuLocation;
  @tracked canRenderChildren = false;

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.MENU;
    this.props = MenuPropsProps();
    this.stateProps = MenuPropsStateProps();
    this.notForComponentProps = MenuPropsPropsNotForComponent();
    this.notForComponentStateProps = MenuPropsStatePropsNotForComponent();
    this.reactElement = ReactMenu;

    this.hiddenChildrenId = uuidv4();
    this.hiddenChildren = null;

    this.reactRender = this.reactRender.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
    this.findAnchorEl = this.findAnchorEl.bind(this);
  }

  initializeProps() {
    super.initializeProps();
    this.props.anchorEl = this.findAnchorEl();
    this.props.reactRenderCallback = this.reactRender;
    this.props.saveChildrenCallback = this.saveChildren;
  }

  renderElement() {
    this.hiddenChildren = document.getElementById(this.hiddenChildrenId);
    document.body.appendChild(this.hiddenChildren);
    once(this, this.initialMoveChildren);
    scheduleOnce('afterRender', this, this.continueRendering);
  }

  initialMoveChildren() {
    this.menuLocation = this.hiddenChildren;
    this.canRenderChildren = true;
  }

  continueRendering() {
    super.renderElement();
  }

  renderChildren() {
    //This is intentionally blank.
  }

  reactRender(insertElement) {
    this.menuLocation = insertElement;
  }

  saveChildren() {
    this.menuLocation = this.hiddenChildren;
  }

  findAnchorEl() {
    let anchorEl = null;

    if (this.args.triggerId) {
      anchorEl = document.getElementById(this.args.triggerId);
    }

    return anchorEl;
  }

  willDestroy() {
    this.hiddenChildren.remove();
    super.willDestroy();
  }
}







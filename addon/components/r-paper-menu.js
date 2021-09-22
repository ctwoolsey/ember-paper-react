import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactMenu } from '../react-component-lib/react-menu';
import { v4 as uuidv4 } from 'uuid';
import {
  MenuPropsProps,
  MenuPropsStateProps,
  MenuPropsPropsNotForComponent,
  MenuPropsStatePropsNotForComponent
} from '../react-component-lib/utility/props/menu-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperMenuComponent extends BaseInElementRender {
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
  }

  initializeProps() {
    super.initializeProps();
    this.args.triggerId && this.setAnchorElByTriggerId();
    this.props.reactRenderCallback = this.reactRender;
    this.props.saveChildrenCallback = this.saveChildren;
  }

  renderElement() {
    this.hiddenChildren = document.getElementById(this.hiddenChildrenId);
    document.body.appendChild(this.hiddenChildren);
    this.moveLocation = this.hiddenChildren;
    super.renderElement();
  }

  reactRender(insertElement) {
    this.moveLocation = insertElement;
  }

  saveChildren() {
    this.moveLocation = this.hiddenChildren;
  }

  setAnchorElByTriggerId() {
    this.props.anchorEl = document.getElementById(this.args.triggerId);
  }

  willDestroy() {
    this.hiddenChildren.remove();
    super.willDestroy();
  }
}







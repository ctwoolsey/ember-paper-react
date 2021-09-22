import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactDrawer } from '../react-component-lib/react-drawer';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { DrawerPropObj } from '../react-component-lib/utility/props/drawer-props';

export default class RPaperDrawerComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DRAWER;
    this.loadPropObject(DrawerPropObj);
    this.reactElement = ReactDrawer;

    this.reactRender = this.reactRender.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.reactRenderCallback = this.reactRender;
    this.propsToPass.saveChildrenCallback = this.saveChildren;
  }

  renderElement() {
    this.renderStack.addRenderLaterCallback(this.renderLater, this);
    this.renderStack.renderNext();
  }

  renderLater() {
    this.childrenFragment = document.createDocumentFragment();
    this.childrenFragment.appendChild(document.getElementById(this.childrenSpanId));

    if (this.args.variant === 'persistent' ||
      this.args.variant === 'permanent' ||
      (this.args.ModalProps && this.args.ModalProps.keepMounted)) {
      if (this.childrenFragment.childNodes.length > 0) {
        this.reactRef.current.componentRef.current.getElementsByClassName('MuiDrawer-paper')[0].replaceChildren(this.childrenFragment);
      }
    }

    this.el.remove();
    const childEndMarker = document.getElementById(this.lastChildId);
    childEndMarker && childEndMarker.remove();
    this.renderStack.renderNext();
  }

  reactRender(insertElement) {
    insertElement.replaceChildren(this.childrenFragment);
  }

  saveChildren(childrenContainer) {
    this.childrenFragment = document.createDocumentFragment();
    while (childrenContainer.hasChildNodes()) {
      this.childrenFragment.appendChild(childrenContainer.firstChild);
    }
  }
}






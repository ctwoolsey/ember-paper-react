import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactDialog } from '../react-component-lib/dialog-related/react-dialog';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  DialogProps,
  DialogStateProps,
  DialogPropsNotForComponent,
  DialogStatePropsNotForComponent
} from '../react-component-lib/utility/props/dialog-props';

export default class RPaperDialogComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.DIALOG;
    this.props = DialogProps();
    this.stateProps = DialogStateProps();
    this.notForComponentProps = DialogPropsNotForComponent();
    this.notForComponentStateProps = DialogStatePropsNotForComponent();
    this.reactElement = ReactDialog;

    this.reactRender = this.reactRender.bind(this);
    this.saveChildren = this.saveChildren.bind(this);
  }

  initializeProps() {
    super.initializeProps();
    this.props.reactRenderCallback = this.reactRender;
    this.props.saveChildrenCallback = this.saveChildren;
  }

  renderElement() {
    this.renderStack.addRenderLaterCallback(this.renderLater, this);
    this.renderStack.renderNext();
  }

  renderLater() {
    this.childrenFragment = document.createDocumentFragment();
    this.childrenFragment.appendChild(document.getElementById(this.childrenSpanId));
    this.el.remove();
    const childEndMarker = document.getElementById(this.lastChildId);
    childEndMarker && childEndMarker.remove();
    this.renderStack.renderLater();
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





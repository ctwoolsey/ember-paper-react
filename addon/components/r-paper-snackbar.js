import { ReactSnackbar } from '../react-component-lib/react-snackbar'
import { SNACKBAR } from '../constants/snackbar';
import { SnackbarPropObj } from '../prop-files/snackbar-props';
import { renderLater } from '../decorators/render-later';
import BaseInElementRender from './base/base-in-element-render';
import { hasProtectedAttributeNodeChildren } from '../decorators/has-protected-attribute-node-children';

@hasProtectedAttributeNodeChildren
@renderLater
export default class RPaperSnackbarComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = SNACKBAR.COMPONENT_TYPE;
    this.loadPropObject(SnackbarPropObj);
    this.reactElement = ReactSnackbar;
  }

  get action(){
    return SNACKBAR.ATTRIBUTE_COMPONENT.ACTION;
  }

  onSaveAttributeNodeChildren() {
    this.saveAttributes(SNACKBAR.ATTRIBUTE_COMPONENT.ACTION);
  }

  onRenderAttributeNodeChildren() {
    this.renderAttributes(SNACKBAR.ATTRIBUTE_COMPONENT.ACTION, SNACKBAR.ACTION_SPAN);
  }

  saveAttributes(attribute) {
    const reactComp = this.reactRef.current.componentRef.current;
    if (reactComp) {
      const moveMethod = this.getAttributeMoveMethod(attribute);
      const storeLocation = this.getAttributeFragment(attribute);
      if (moveMethod) {
        moveMethod(storeLocation);
      }
    }
  }

  renderAttributes(attribute, className) {
    const reactComp = this.reactRef.current.componentRef.current;
    if (reactComp) {
      const moveMethod = this.getAttributeMoveMethod(attribute);
      if (moveMethod) {
        moveMethod(reactComp.getElementsByClassName(className)[0]);
      }
    }
  }

  renderLater() {
    this.renderElementItems();
  }

  createReactComponent() {
    //signal to react component whether to create dummy placeholders for action
    if (this.getAttributeFragment(SNACKBAR.ATTRIBUTE_COMPONENT.ACTION)) {
      this.propsToPass.action = true;
    }

    if (this.moveLocation.children.length < 1) {
      //using Attributes, no real children
      //snackbar needs the children deleted
      delete this.propsToPass.children;
    }
    super.createReactComponent();
  }

}


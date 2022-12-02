import { ReactAlert } from '../react-component-lib/react-alert'
import { ALERT } from '../constants/alert';
import { AlertPropObj } from '../prop-files/alert-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";
import BaseEmberPaperReact from './base/base-ember-paper-react';

@hasAttributeNodeChildren
export default class RPaperAlertComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = ALERT.COMPONENT_TYPE;
    this.loadPropObject(AlertPropObj);
    this.reactElement = ReactAlert;
  }

  renderChildren() {
    this.moveLocation = this.reactRef.current.componentRef.current.getElementsByClassName(ALERT.INSERT_CLASS)[0];
  }

  get action(){
    return ALERT.ATTRIBUTE_COMPONENT.ACTION;
  }

  get message(){
    return ALERT.ATTRIBUTE_COMPONENT.MESSAGE;
  }

  onRenderAttributeNodeChildren() {
    this.moveAttributes(ALERT.ATTRIBUTE_COMPONENT.ACTION, ALERT.ACTION_SPAN);
    this.moveAttributes(ALERT.ATTRIBUTE_COMPONENT.MESSAGE, ALERT.MESSAGE_SPAN);
  }

  moveAttributes(attribute, className) {
    const reactComp = this.reactRef.current.componentRef.current;
    const moveMethod = this.getAttributeMoveMethod(attribute);
    if (moveMethod) {
      moveMethod(reactComp.getElementsByClassName(className)[0]);
    }
  }

  createReactComponent() {
    //signal to react component whether to create dummy placeholders for action
    if (this.getAttributeFragment(ALERT.ATTRIBUTE_COMPONENT.ACTION)) {
      this.propsToPass.action = true;
    }
    this.getAttributeFragment(ALERT.ATTRIBUTE_COMPONENT.MESSAGE)
    super.createReactComponent();
  }

}


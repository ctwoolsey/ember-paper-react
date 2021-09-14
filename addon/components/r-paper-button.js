import {ReactButton} from "../react-component-lib/react-button"
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseEmberPaperReact from "./base/base-ember-paper-react";
import { ButtonProps, ButtonStateProps, ButtonPropsNotForComponent } from "../react-component-lib/utility/props/button-props";

export default class RPaperButton extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BUTTON;
    this.props = ButtonProps();
    this.stateProps = ButtonStateProps();
    this.notForComponentProps = ButtonPropsNotForComponent();
    this.reactElement = ReactButton;
  }

  renderChildren() {
    this.setChildrenFragment();
    if (this.childrenFragment.childNodes.length > 0) {
      const reactElement = this.reactRef.current.componentRef.current;
      if (this.args.startIcon || this.args.endIcon) {
        if (this.args.startIcon) {
          const startIconSpan = reactElement.getElementsByClassName('MuiButton-startIcon')[0];
          startIconSpan.parentNode.insertBefore(this.childrenFragment, startIconSpan.nextSibling);
        } else {
          const endIconSpan = reactElement.getElementsByClassName('MuiButton-endIcon')[0];
          endIconSpan.parentNode.insertBefore(this.childrenFragment, endIconSpan);
        }
      } else {
        reactElement.replaceChildren(this.childrenFragment);
      }
    }
  }
}

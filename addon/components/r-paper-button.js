import {ReactButton} from "../react-component-lib/react-button"
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseEmberPaperReact from "./base/base-ember-paper-react";
import { ButtonProps, ButtonStateProps, ButtonStatePropsArgs } from "../react-component-lib/utility/props/button-props";

export default class RPaperButton extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.BUTTON;
    this.props = ButtonProps;
    this.stateProps = ButtonStateProps;
    this.statePropsArgs = ButtonStatePropsArgs;
    this.reactElement = ReactButton;
  }
}

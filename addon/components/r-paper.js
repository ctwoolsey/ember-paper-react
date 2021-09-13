import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import { PaperProps, PaperStateProps } from "../react-component-lib/utility/props/paper-props";
import { ReactPaper } from "../react-component-lib/react-paper";
import BaseEmberPaperReact from "./base/base-ember-paper-react";

export default class RPaperComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.PAPER;
    this.props = PaperProps();
    this.stateProps = PaperStateProps();
    this.reactElement = ReactPaper;

  }

  renderChildren() {
    this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
  }
}







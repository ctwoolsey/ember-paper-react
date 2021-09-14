import {ReactToolbar} from "../react-component-lib/react-toolbar"
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseEmberPaperReact from "./base/base-ember-paper-react";
import {
  ToolbarProps,
  ToolbarStateProps,
  ToolbarPropsNotForComponent
} from "../react-component-lib/utility/props/toolbar-props";

export default class RPaperToolbarComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.TOOLBAR;
    this.props = ToolbarProps();
    this.stateProps = ToolbarStateProps();
    this.notForComponentProps = ToolbarPropsNotForComponent();
    this.reactElement = ReactToolbar;
  }

  renderChildren() {
    this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
  }
}

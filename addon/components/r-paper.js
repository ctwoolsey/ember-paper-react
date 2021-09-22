import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { PaperProps, PaperStateProps, PaperPropsNotForComponent, PaperStatePropsNotForComponent } from '../react-component-lib/utility/props/paper-props';
import { ReactPaper } from '../react-component-lib/react-paper';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.PAPER;
    this.props = PaperProps();
    this.stateProps = PaperStateProps();
    this.notForComponentProps = PaperPropsNotForComponent();
    this.notForComponentStateProps = PaperStatePropsNotForComponent();
    this.reactElement = ReactPaper;

  }

  renderChildren() {
    this.moveLocation = this.reactRef.current.componentRef.current;
  }
}

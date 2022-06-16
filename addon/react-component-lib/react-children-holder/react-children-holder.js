import { GLOBAL_STRINGS } from "../../constants/constants";
import React from 'react'

export class ReactChildrenHolder extends React.Component{
  constructor(props) {
    super(props);
    this.spanRef = React.createRef();
    this.parent = null;
  }

  componentDidMount() {
    if (this.spanRef.current && this.props.reactRenderCallback) {
      this.parent = this.spanRef.current.parentElement;
      //By default the component will erase the children-holder span
      //and render into the parent
      if (this.props.renderToChildrenHolderSpan) {
        this.props.reactRenderCallback(this.spanRef.current);
      } else {
        this.props.reactRenderCallback(this.parent);
      }
    }
  }

  componentWillUnmount() {
    if (this.spanRef.current && this.props.saveChildrenCallback) {
      if (this.props.renderToChildrenHolderSpan) {
        this.props.saveChildrenCallback(this.spanRef.current);
      } else {
        this.props.saveChildrenCallback(this.parent);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false; //Don't let dialog manually update the dialog children;
  }

  render() {
    return (
      <span ref={this.spanRef} className={GLOBAL_STRINGS.CHILDREN_HOLDER_CLASS_NAME}></span>
    );
  }
}

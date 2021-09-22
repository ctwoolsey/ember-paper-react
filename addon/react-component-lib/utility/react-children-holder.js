import React from 'react';

export class ReactChildrenHolder extends React.Component{
  constructor(props) {
    super(props);
    this.spanRef = React.createRef();
    this.parent = null;
  }

  componentDidMount() {
    if (this.spanRef.current && this.props.reactRenderCallback) {
      this.parent = this.spanRef.current.parentElement;
      this.props.reactRenderCallback(this.parent);
    }
  }

  componentWillUnmount() {
    if (this.spanRef.current && this.props.saveChildrenCallback) {
      this.props.saveChildrenCallback(this.parent);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false; //Don't let dialog manually update the dialog children;
  }

  render() {
    return (
      <span ref={this.spanRef} className='children-holder'></span>
    );
  }
}

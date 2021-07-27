import React from 'react';

export class ReactChildrenHolder extends React.Component{
  constructor(props) {
    super(props);
    this.spanRef = React.createRef();
  }

  componentDidMount() {
    console.log('Children Holder did mount');
    if (this.spanRef.current && this.props.dialogRenderCallback) {
      this.props.dialogRenderCallback(this.spanRef.current)
    }
  }

  componentWillUnmount() {
    console.log('Children Holder will unmount');
    if (this.spanRef.current && this.props.saveChildrenCallback) {
      this.props.saveChildrenCallback(this.spanRef.current)
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Should Children Holder Update');
    return false; //Don't let dialog manually update the dialog children;
  }

  render() {
    return (
      <span ref={this.spanRef} className="children-holder"></span>
    );
  }
}

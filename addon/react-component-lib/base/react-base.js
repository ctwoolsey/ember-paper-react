import React from "react";
import { PaperStateProps } from "../utility/props/paper-props";

export class ReactBase extends React.Component{
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.setStateProp = this.setStateProp.bind(this);
    /*this.placeProps = this.placeProps.bind(this);
    this.placeStateProps = this.placeStateProps.bind(this);*/
    this.state = {};
    let stateProps = Object.assign({}, PaperStateProps);
    this.staticProps = {};
    for (let propName in props) {
      if (Object.prototype.hasOwnProperty.call(stateProps,propName)) {
        stateProps[propName] = this.props[propName];
      } else {
        this.staticProps[propName] = this.props[propName];
      }
    }

    if (!Object.prototype.hasOwnProperty.call(stateProps,'theme')) {
      stateProps.theme = null;
    }
    Object.assign(this.state, stateProps);
  }

  placeProps() {
    let propObject = {};
    for (let propName in this.staticProps) {
      if (this.staticProps[propName]) {
        propObject[propName] = this.staticProps[propName];
      }
    }
    return propObject;
  }

  placeStateProps() {
    let statePropObject = {};
    for (let propName in this.state) {
      switch (propName) {
        case 'classString':
          if (this.state[propName]) {
            statePropObject['className'] = this.state[propName];
          }
          break;
        case 'theme':
          break;
        default:
          if (this.state[propName]) {
            statePropObject[propName] = this.state[propName];
          }
          break;
      }

    }
    return statePropObject;
  }

  setStateProp(propName, value) {
    if (Object.prototype.hasOwnProperty.call(this.state, propName)) {
      this.setState({ [propName]: value })
    }
  }


  //////
  render() {
    return {};
  }
}

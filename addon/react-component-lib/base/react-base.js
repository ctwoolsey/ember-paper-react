import React from "react";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactBase extends React.Component{
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.setStateProp = this.setStateProp.bind(this);
    this.staticProps = {};  //properties that are not connected to state
    this.DefaultComponentToRender = null;
  }

  initialize(stateProperties) {
    this.state = {};
    let stateProps = Object.assign({}, stateProperties);

    for (let propName in this.props) {
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
        case 'class':
          if (this.state['class']) {
            statePropObject['className'] = this.state['class'];
          }
          break;
        case 'theme':
          //filter out theme as it is only applied to the theme element
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

  themedRender() {
    const {
      theme
    } = this.state;

    const ComponentToRender = this.DefaultComponentToRender;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <ComponentToRender
          ref={this.componentRef}
          {...(this.placeProps())}
          {...(this.placeStateProps())}
        />
      </ReactConditionalThemeProvider>
    );
  }

  basicRender() {
    const ComponentToRender = this.DefaultComponentToRender;

    return (
      <ComponentToRender
        ref={this.componentRef}
        {...(this.placeProps())}
        {...(this.placeStateProps())}
      />
    );
  }

  //Default themed render
  render() {
    if (Object.prototype.hasOwnProperty.call(this.state, 'theme')) {
      return this.themedRender();
    } else {
      return this.basicRender();
    }
  }
}

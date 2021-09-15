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

  initialize(stateProperties, statePropertiesNotForComponent) {
    this.state = {};
    this.statePropsForComponent = Object.assign({}, stateProperties);
    let statePropsNotForComponent = Object.assign({}, statePropertiesNotForComponent);

    for (let propName in this.props) {
      if (Object.prototype.hasOwnProperty.call(this.statePropsForComponent,propName)) {
        this.statePropsForComponent[propName] = this.props[propName];
      } else {
        if (Object.prototype.hasOwnProperty.call(statePropsNotForComponent,propName)) {
          statePropsNotForComponent[propName] = this.props[propName];
        } else {
          this.staticProps[propName] = this.props[propName];
        }
      }
    }

    Object.assign(this.state, this.statePropsForComponent, statePropsNotForComponent);
  }

  placeProps() {
    let propObject = {};
    for (let propName in this.staticProps) {
      if (this.staticProps[propName] !== null && this.staticProps[propName] !== undefined) {
        propObject[propName] = this.staticProps[propName];
      }
    }
    return propObject;
  }

  placeStateProps() {
    let statePropObject = {};
    for (let propName in this.statePropsForComponent) {
      switch (propName) {
        case 'class':
          if (this.state['class']) {
            statePropObject['className'] = this.state['class'];
          }
          break;
        default:
          if (this.state[propName] !== null && this.state[propName] !== undefined) {
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

  renderComponent() {
    const ComponentToRender = this.DefaultComponentToRender;

    return (
      <ComponentToRender
        ref={this.componentRef}
        {...(this.placeProps())}
        {...(this.placeStateProps())}
      />
    )
  }

  themedRender() {
    const {
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        {this.renderComponent()}
      </ReactConditionalThemeProvider>
    );
  }

  //Default themed render
  render() {
    if (Object.prototype.hasOwnProperty.call(this.state, 'theme')) {
      return this.themedRender();
    } else {
      return this.renderComponent();
    }
  }
}

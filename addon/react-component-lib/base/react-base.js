import React from 'react';
import { ReactConditionalThemeProvider } from '../react-conditional-theme-provider';

export class ReactBase extends React.Component{
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.setStateProp = this.setStateProp.bind(this);
    this.staticProps = {};  //properties that are not connected to state
    this.DefaultComponentToRender = null;
  }

  initialize(stateProperties, propertiesNotForComponent, statePropertiesNotForComponent) {
    /* filter this.props into this.staticProps since it will have properties that should be
       stateful and even properties not meant for the react component */
    this.statePropsForComponent = Object.assign({}, stateProperties);
    let statePropsNotForComponent = Object.assign({}, statePropertiesNotForComponent);
    let propsNotForComponent = Object.assign({}, propertiesNotForComponent);

    for (let propName in this.props) {
      if (Object.prototype.hasOwnProperty.call(this.statePropsForComponent,propName)) {
        this.statePropsForComponent[propName] = this.props[propName];
      } else {
        if (Object.prototype.hasOwnProperty.call(statePropsNotForComponent,propName)) {
          statePropsNotForComponent[propName] = this.props[propName];
        } else {
          if (Object.prototype.hasOwnProperty.call(propsNotForComponent,propName)) {
            propsNotForComponent[propName] = this.props[propName];
          } else {
            this.staticProps[propName] = this.props[propName];
          }
        }
      }
    }

    this.state = Object.assign({}, this.statePropsForComponent, statePropsNotForComponent);
  }

  placeStaticProps(staticProps) {
    let propObject = {};
    for (let propName in staticProps) {
      if (staticProps[propName] !== null && staticProps[propName] !== undefined) {
        propObject[propName] = staticProps[propName];
      }
    }

    return propObject;
  }

  placeStateProps(statePropsForComponent) {
    let statePropObject = {};
    for (let propName in statePropsForComponent) {
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
        {...(this.placeStaticProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
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

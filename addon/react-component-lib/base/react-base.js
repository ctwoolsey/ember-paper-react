import React from 'react';
import { ReactConditionalThemeProvider } from '../react-conditional-theme-provider';
import { ReactChildrenHolder } from "../react-children-holder/react-children-holder";
import { reactPropSifter } from "../utility/react-prop-sifter";
import { reactCreateIcon } from "../utility/react-create-icon";

export class ReactBase extends React.Component{
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.setStateProp = this.setStateProp.bind(this);
    this.staticProps = {};  //properties that are not connected to state
    this.statePropsForComponent = {};
    this.propsNotForComponent = {};
    this.DefaultComponentToRender = null;
  }

  initialize(propsObj) {
    const propsSifted = reactPropSifter(this.props, propsObj);
    this.state = Object.assign({}, propsSifted.stateProps, propsSifted.statefulPropsNotForComponent);
    this.staticProps = propsSifted.staticProps;
    this.statePropsForComponent = propsSifted.stateProps;
    this.propsNotForComponent = propsSifted.propsNotForComponent;
  }

  placeStaticProps(staticProps) {
    let propObject = {};
    for (let propName in staticProps) {
      if (staticProps[propName] !== null && staticProps[propName] !== undefined) {
        propObject[propName] = staticProps[propName];
        this.loadIconIfIcon(propName, propObject);
      }
    }

    delete propObject.ref; //added separately
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
            this.loadIconIfIcon(propName, statePropObject);
          }
          break;
      }

    }
    return statePropObject;
  }

  loadIconIfIcon(propName, object) {
    if (propName.toLowerCase().endsWith('icon')) {
      object[propName] = reactCreateIcon(object[propName]);
    }
  }

  formatStyle(styleValue) {
    let styleObj = {};

    if (styleValue) {
      if (typeof styleValue === 'string') {
        const styleArr = styleValue.split(';');
        styleArr.forEach(style => {
          const stylePieces = style.split(':');
          styleObj[stylePieces[0].replace(/\s/g,'')] = stylePieces[1].replace(/\s/g,'');
        });
      } else {
        styleObj = styleValue;
      }
    }
    return styleObj;
  }

  setStateProp(propName, value) {
    if (Object.prototype.hasOwnProperty.call(this.state, propName)) {
      if (propName === 'style') {
        value = this.formatStyle(value);
      }

      this.setState({ [propName]: value })
    }
  }

  renderChildrenHolder(){
    if (!Object.prototype.hasOwnProperty.call(this.propsNotForComponent, 'renderToChildrenHolderSpan')) {
      this.propsNotForComponent.renderToChildrenHolderSpan = false;
    }
    return (
      <ReactChildrenHolder
        renderToChildrenHolderSpan={this.propsNotForComponent.renderToChildrenHolderSpan}
        {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
        {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
      />
    );
  }

  childrenToRender() {
    const {
      children
    } = this.state;

    return children;
  }

  renderChildren() {
    if (this.props.reactRenderCallback && this.props.saveChildrenCallback) {
      return this.renderChildrenHolder();
    } else {
      return this.childrenToRender();
    }
  }

  renderComponent() {
    const ComponentToRender = this.DefaultComponentToRender;
    //can't simplify this code because react component like chip can't have any children even null.
    if (Object.prototype.hasOwnProperty.call(this.props, 'children')) {
      return (
        <ComponentToRender
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        >
          {this.renderChildren()}
        </ComponentToRender>
      )
    } else {
      return (
        <ComponentToRender
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        />
      )
    }
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

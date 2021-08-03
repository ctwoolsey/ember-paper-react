import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactBackdrop extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.addedEmberChildren = false;
    this.state = {
      classString: props.classString,
      open: props.open,
      sx: props.sx,
      theme: props.theme,
      variant: props.variant
    };
    this.componentRef = React.createRef();
  }

  render() {
    const {
      classString,
      invisible,
      open,
      sx,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Backdrop
          ref={this.componentRef}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(this.props.components ? {components: this.props.components} : {})}
          {...(this.props.componentsProps ? {componentsProps: this.props.componentsProps} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(invisible ? {invisible: invisible} : {invisible: false})}
          {...(this.props.onClick ? {onClick: this.props.onClick} : {})}
          {...(open ? {open: open} : {open: false})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.transitionDuration ? {transitionDuration: this.props.transitionDuration} : {})}
        >
        </Backdrop>
      </ReactConditionalThemeProvider>
    );
  }
}

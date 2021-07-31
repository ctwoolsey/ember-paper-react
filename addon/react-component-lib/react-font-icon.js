import React from 'react';
import Icon from '@material-ui/core/Icon';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactFontIcon extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        baseClassName: props.baseClassName,
        color: props.color,
        iconName: props.iconName
      });
  }

  render() {
    const {
      baseClassName,
      classString,
      color,
      sx,
      theme,
      iconName
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Icon
          {...(baseClassName ? {baseClassName: baseClassName} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(color ? {color: color} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(this.props.fontSize ? {fontSize: this.props.fontSize} : {})}
          {...(sx ? {sx: sx} : {})}
          ref={this.componentRef}
        >
          {iconName}
        </Icon>
      </ReactConditionalThemeProvider>
    );
  }
}

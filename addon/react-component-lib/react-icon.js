import React from 'react';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon'
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactIcon extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        baseClassName: props.baseClassName,
        color: props.color,
        iconName: props.iconName,
        reactIcon: props.reactIcon
      });
  }

  render() {
    const {
      baseClassName,
      classString,
      color,
      sx,
      theme,
      iconName,
      reactIcon
    } = this.state;
    if (this.props.hasPath) {
      return (
        <ReactConditionalThemeProvider theme={theme}>
          <SvgIcon
            {...(classString ? { className: classString } : {})}
            {...(color ? { color: color } : {})}
            {...(this.props.component ? { component: this.props.component } : {})}
            {...(this.props.fontSize ? { fontSize: this.props.fontSize } : {})}
            {...(this.props.id ? {id: this.props.id} : {})}
            {...(sx ? { sx: sx } : {})}
            ref={this.componentRef}
          >
            <path d="" />
          </SvgIcon>
        </ReactConditionalThemeProvider>
      );
    } else {
      if (reactIcon) {
        const ReactMaterialIcon = reactIcon;
        return (
          <ReactConditionalThemeProvider theme={theme}>
            <ReactMaterialIcon
              {...(classString ? { className: classString } : {})}
              {...(color ? { color: color } : {})}
              {...(this.props.component ? { component: this.props.component } : {})}
              {...(this.props.fontSize ? { fontSize: this.props.fontSize } : {})}
              {...(this.props.id ? {id: this.props.id} : {})}
              {...(sx ? { sx: sx } : {})}
              ref={this.componentRef}
            />
          </ReactConditionalThemeProvider>
        );
      } else {
        return (
          <ReactConditionalThemeProvider theme={theme}>
            <Icon
              {...(baseClassName ? { baseClassName: baseClassName } : {})}
              {...(classString ? { className: classString } : {})}
              {...(this.props.children ? { children: this.props.children } : {})}
              {...(color ? { color: color } : {})}
              {...(this.props.component ? { component: this.props.component } : {})}
              {...(this.props.fontSize ? { fontSize: this.props.fontSize } : {})}
              {...(this.props.id ? {id: this.props.id} : {})}
              {...(sx ? { sx: sx } : {})}
              ref={this.componentRef}
            >
              {iconName}
            </Icon>
          </ReactConditionalThemeProvider>
        );

      }
    }
  }
}

import React from 'react';
import AvatarGroup from '@material-ui/core/AvatarGroup';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactAvatarGroup extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        max: props.max,
        spacing: props.spacing,
        variant: props.variant
      });

  }

  render() {
    const {
      classString,
      max,
      spacing,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <AvatarGroup
          onClick={this.props.onClick}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(max ? {max: max} : {})}
          {...(spacing ? {spacing: spacing} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

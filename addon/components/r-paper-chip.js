import React from 'react';
import Chip from '@material-ui/core/Chip';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class RPaperChipComponent extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        color: props.color,
        disabled: props.disabled,
        disableElevation: props.disableElevation,
        disableFocusRipple: props.disableFocusRipple,
        disableRipple: props.disableRipple,
        fullWidth: props.fullWidth,
        href: props.href,
        size: props.size,
        variant: props.variant
      });

    //methods

  }

  render() {
    const {
      avatar,
      classString,
      clickable,
      color,
      component,
      deleteIcon,
      disabled,
      icon,
      label,
      onDelete,
      size,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Chip
          onClick={this.props.onClick}
          {...(classString ? {className: classString} : {})}
          {...(color ? {color: color} : {})}
          disabled={disabled}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          href={href}
          {...(size ? {size: size} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

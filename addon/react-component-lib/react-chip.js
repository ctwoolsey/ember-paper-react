import React from 'react';
import Chip from '@material-ui/core/Chip';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

/* deleteIcon & Icon are not currently supported */
export class ReactChip extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        clickable: props.clickable,
        color: props.color,
        disabled: props.disabled,
        label: props.label,
        size: props.size,
        variant: props.variant
      });
  }

  render() {
    const {
      classString,
      clickable,
      color,
      disabled,
      label,
      size,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Chip
          {...(this.props.avatar ? {avatar: this.props.avatar} : {})}
          {...(classString ? {className: classString} : {})}
          {...(clickable ? {clickable: clickable} : {})}
          {...(color ? {color: color} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          disabled={disabled}
          label={label}
          {...(this.props.onClick ? {onClick: this.props.onClick} : {})}
          {...(this.props.onDelete ? {onDelete: this.props.onDelete} : {})}
          {...(size ? {size: size} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

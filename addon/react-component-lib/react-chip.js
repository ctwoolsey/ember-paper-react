import React from 'react';
import Chip from '@material-ui/core/Chip';
import { ReactBaseWithTheme } from './base/react-base-with-theme';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';

/* deleteIcon & Icon are not currently supported */
export class ReactChip extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        avatar: props.avatar,
        clickable: props.clickable,
        color: props.color,
        disabled: props.disabled,
        icon: props.icon,
        label: props.label,
        size: props.size,
        variant: props.variant
      });
  }

  render() {
    const {
      avatar,
      classString,
      clickable,
      color,
      disabled,
      icon,
      label,
      size,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Chip
          {...(avatar ? {avatar: avatar} : {})}
          {...(classString ? {className: classString} : {})}
          {...(clickable ? {clickable: clickable} : {})}
          {...(color ? {color: color} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          disabled={disabled}
          {...(icon ? {icon: icon} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
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

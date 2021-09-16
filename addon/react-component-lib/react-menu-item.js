import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { ReactBaseWithTheme } from './base/react-base-with-theme';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';

export class ReactMenuItem extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        disabled: props.disabled,
        disableRipple: props.disableRipple,
        disableTouchRipple: props.disableTouchRipple
      });

  }

  render() {
    const {
      classString,
      sx,
      theme,
      disabled,
      disableRipple,
      disableTouchRipple
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <MenuItem
          onClick={this.props.onClick}
          {...(this.props.action ? {action: this.props.action} : {})}
          {...(this.props.autoFocus ? {autoFocus: this.props.autoFocus} : {})}
          {...(this.props.centerRipple ? {centerRipple: this.props.centerRipple} : {})}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(this.props.dense ? {dense: this.props.dense} : {})}
          {...(disabled ? {disabled: disabled} : {})}
          {...(this.props.disableGutters ? {disableGutters: this.props.disableGutters} : {})}
          {...(disableRipple ? {disableRipple: disableRipple} : {})}
          {...(disableTouchRipple ? {disableTouchRipple: disableTouchRipple} : {})}
          {...(this.props.focusRipple ? {focusRipple: this.props.focusRipple} : {})}
          {...(this.props.focusVisibleClassName ? {focusVisibleClassName: this.props.focusVisibleClassName} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(this.props.linkComponent ? {LinkComponent: this.props.linkComponent} : {})}
          {...(this.props.onFocusVisible ? {onFocusVisible: this.props.onFocusVisible} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.touchRippleProps ? {TouchRippleProps: this.props.touchRippleProps} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

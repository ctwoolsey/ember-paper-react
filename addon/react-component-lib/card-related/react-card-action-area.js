import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { ReactBaseWithTheme } from '../base/react-base-with-theme';
import { ReactConditionalThemeProvider } from '../react-conditional-theme-provider';

export class ReactCardActionArea extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        disabled: props.disabled,
        disableRipple: props.disableRipple,
        disableTouchRipple: props.disableTouchRipple,
      });

  }

  render() {
    const {
      classString,
      disabled,
      disableRipple,
      disableTouchRipple,
      sx,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <CardActionArea
          onClick={this.props.onClick}
          {...(this.props.action ? {action: this.props.action} : {})}
          {...(this.props.centerRipple ? {centerRipple: this.props.centerRipple} : {})}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(disabled ? {disabled: disabled} : {})}
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

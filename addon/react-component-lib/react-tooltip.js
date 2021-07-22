import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactTooltip extends ReactBaseWithTheme{
  constructor(props) {
    super(props);

    this.state = Object.assign(this.state, {
      title: props.title,
      disabled: props.disabled,
      disableFocusListener: props.disableFocusListener,
      disableHoverListener: props.disableHoverListener,
      disableInteractive: props.disableInteractive,
      disableTouchListener: props.disableTouchListener,
      open: props.open,
      placement: props.placement
    });

    this.componentRef = React.createRef();

    //methods
    this.setTitle = this.setTitle.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisableFocusListener = this.setDisableFocusListener.bind(this);
    this.setDisableHoverListener = this.setDisableHoverListener.bind(this);
    this.setDisableInteractive = this.setDisableInteractive.bind(this);
    this.setDisableTouchListener = this.setDisableTouchListener.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.setPlacement = this.setPlacement.bind(this);
  }

  setTitle(title) {
    this.setState({title: title})
  }

  setDisabled(disabled) {
    this.setState({disabled: disabled});
  }

  setDisableFocusListener(disableFocusListener) {
    this.setState( {disableFocusListener: disableFocusListener});
  }

  setDisableHoverListener(disableHoverListener) {
    this.setState( {disableHoverListener: disableHoverListener});
  }

  setDisableInteractive(disableInteractive) {
    this.setState( {disableInteractive: disableInteractive});
  }

  setDisableTouchListener(disableTouchListener) {
    this.setState({ disableTouchListener: disableTouchListener });
  }

  setOpen(open) {
    this.setState( {open: open});
  }

  setPlacement(placement) {
    this.setState( {placement: placement});
  }

  render() {
    const {
      title,
      classString,
      disabled,
      disableFocusListener,
      disableHoverListener,
      disableInteractive,
      disableTouchListener,
      open,
      placement,
      sx,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Tooltip
          ref={this.componentRef}
          {...(title ? {title: title} : {title: ''})}
          {...(this.props.arrow ? {arrow: this.props.arrow} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.describeChild ? {describeChild: this.props.describeChild} : {})}
          {...(disableFocusListener ? {disableFocusListener: disableFocusListener} : {})}
          {...(disableHoverListener ? {disableHoverListener: disableHoverListener} : {})}
          {...(disableInteractive ? {disableInteractive: disableInteractive} : {})}
          {...(disableTouchListener ? {disableTouchListener: disableTouchListener} : {})}
          {...(this.props.enterDelay ? {enterDelay: this.props.enterDelay} : {})}
          {...(this.props.enterNextDelay ? {enterNextDelay: this.props.enterNextDelay} : {})}
          {...(this.props.enterTouchDelay ? {enterTouchDelay: this.props.enterTouchDelay} : {})}
          {...(this.props.followCursor ? {followCursor: this.props.followCursor} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(this.props.leaveDelay ? {leaveDelay: this.props.leaveDelay} : {})}
          {...(this.props.leaveTouchDelay ? {leaveTouchDelay: this.props.leaveTouchDelay} : {})}
          {...(this.props.onClose ? {onClose: this.props.onClose} : {})}
          {...(this.props.onOpen ? {onOpen: this.props.onOpen} : {})}
          {...(open ? {open: open} : {})}
          {...(placement ? {placement: placement} : {})}
          {...(this.props.popperComponent ? {PopperComponent: this.props.popperComponent} : {})}
          {...(this.props.popperProps ? {PopperProps: this.props.popperProps} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.transitionComponent ? {TransitionComponent: this.props.transitionComponent} : {})}
          {...(this.props.transitionProps ? {TransitionProps: this.props.transitionProps} : {})}
        >
          <span>
            <Button {...(disabled ? { disabled: disabled} : {})}>Dummy Tooltip Child</Button>
          </span>
        </Tooltip>
      </ReactConditionalThemeProvider>
    );
  }
}

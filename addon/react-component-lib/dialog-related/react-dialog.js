import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ReactThemeBase } from "../base/react-theme-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";
import { ReactChildrenHolder } from "./react-children-holder";


export class ReactDialog extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.addedEmberChildren = false;
    this.state = {
      open: props.open,
      classString: props.classString,
      fullScreen: props.fullScreen,
      fullWidth: props.fullWidth,
      maxWidth: props.maxWidth,
      sx: props.sx,
      theme: props.theme
    };

    this.componentRef = React.createRef();

    //methods
    this.setOpen = this.setOpen.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setFullScreen = this.setFullScreen.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
    this.setMaxWidth = this.setMaxWidth.bind(this);
    this.setSx = this.setSx.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.addEmberChildren = this.addEmberChildren.bind(this);
  }

  setOpen(open) {
    this.setState( {open: open});
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setFullScreen(fullScreen) {
    this.setState({fullScreen: fullScreen});
  }

  setFullWidth(fullWidth) {
    this.setState( {fullWidth: fullWidth});
  }

  setMaxWidth(maxWidth) {
    this.setState( {maxWidth: maxWidth});
  }

  setSx(sx) {
    this.setState({ sx: sx});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
  }


  render() {

    const {
      open,
      classString,
      fullScreen,
      fullWidth,
      maxWidth,
      sx,
      theme
    } = this.state

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Dialog
          ref={this.componentRef}
          {...(open ? {open: open} : {open: false})}
          aria-describedby={this.props.ariaDescribedBy}
          aria-labelledby={this.props.ariaLabelledBy}
          {...(this.props.backdropComponent ? {BackdropComponent: this.props.backdropComponent} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.disableEscapeKeyDown ? {disableEscapeKeyDown: this.props.disableEscapeKeyDown} : {})}
          {...(fullScreen ? {fullScreen: fullScreen} : {})}
          {...(fullWidth ? {fullWidth: fullWidth} : {})}
          {...(maxWidth ? {maxWidth: maxWidth} : {})}
          {...(this.props.onBackdropClick ? {onBackdropClick: this.props.onBackdropClick} : {})}
          {...(this.props.onClose ? {onClose: this.props.onClose} : {})}
          {...(this.props.onClose ? {onClose: this.props.onClose} : {})}
          {...(this.props.paperComponent ? {PaperComponent: this.props.paperComponent} : {})}
          {...(this.props.paperProps ? {PaperProps: this.props.paperProps} : {})}
          {...(this.props.scroll ? {scroll: this.props.scroll} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.transitionComponent ? {TransitionComponent: this.props.transitionComponent} : {})}
          {...(this.props.transitionDuration ? {TransitionDuration: this.props.transitionDuration} : {})}
          {...(this.props.transitionProps ? {TransitionProps: this.props.transitionProps} : {})}
        >
          <ReactChildrenHolder
            {...(this.props.dialogRenderCallback ? {dialogRenderCallback: this.props.dialogRenderCallback} : {})}
            {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
          />
        </Dialog>
      </ReactConditionalThemeProvider>
    );
  }
}

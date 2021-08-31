import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ReactDialogHelperBase } from "../base/react-dialog-helper-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";
import { ReactChildrenHolder } from "../utility/react-children-holder";


export class ReactDialog extends ReactDialogHelperBase{
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
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.backgroundClicked = false;

  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    const dialogArea = document.getElementsByClassName('MuiDialog-paper')
    dialogArea.length && dialogArea[0].addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    const dialogArea = document.getElementsByClassName('MuiDialog-paper')
    dialogArea.length && dialogArea[0].removeEventListener('keydown', this.onKeyDown);
  }

  handleClickOutside(event) {
    const dialogArea = document.getElementsByClassName('MuiDialog-paper');
    if (dialogArea.length && !dialogArea[0].contains(event.target)) {
      this.backgroundClicked = true;
      //this.props.onBackdropClick && this.props.onBackdropClick(event);
    }
  }

  onKeyDown() {
    //having this somehow enables the underlying react functionality.  Without this, esc doesn't work.
  }

  onClose(event, reason) {
    if (this.props.keepOpenOnClickOutside && this.backgroundClicked) {
      this.setOpen(true);
      this.backgroundClicked = false;
    } else {
      this.props.onClose(event, reason);
      this.setOpen(false);
    }
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
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(maxWidth ? {maxWidth: maxWidth} : {})}
          {...(this.props.onBackdropClick ? {onBackdropClick: this.props.onBackdropClick} : {})}
          onClose={this.onClose}
          {...(this.props.paperComponent ? {PaperComponent: this.props.paperComponent} : {})}
          {...(this.props.paperProps ? {PaperProps: this.props.paperProps} : {})}
          {...(this.props.scroll ? {scroll: this.props.scroll} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.transitionComponent ? {TransitionComponent: this.props.transitionComponent} : {})}
          {...(this.props.transitionDuration ? {TransitionDuration: this.props.transitionDuration} : {})}
          {...(this.props.transitionProps ? {TransitionProps: this.props.transitionProps} : {})}
        >
          <ReactChildrenHolder
            {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
            {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
          />
        </Dialog>
      </ReactConditionalThemeProvider>
    );
  }
}

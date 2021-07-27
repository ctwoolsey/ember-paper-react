import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ReactThemeBase } from "../base/react-theme-base";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';



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
      theme: props.theme,
    };

    this.componentRef = React.createRef();
    this.insertElement = null;
    this.spanRef = React.createRef();

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

  /*componentDidMount() {
    if (this.spanRef.current) {
      this.spanRef.current.innerhtml = 'It changed';
    }
  }*/

  componentDidMount() {
    console.log('Dialog did mount');
  }

  componentWillUnmount() {
    console.log('Dialog will unmount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Should Dialog Update');
    if (!nextState.open && this.props.saveChildrenCallback) {
      this.props.saveChildrenCallback(this.insertElement);
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Dialog Did Update');
    //if (!this.addedEmberChildren) {
      if (!prevState.open && this.state.open) {
        this.addedEmberChildren = true;
        setTimeout(this.addEmberChildren, 50);
      }
    //}
  }

  addEmberChildren() {
    if (this.spanRef.current) {
      this.insertElement = this.spanRef.current.parentElement;
    }
    if (this.spanRef.current && this.props.dialogRenderCallback) {
      this.props.dialogRenderCallback(this.insertElement);
      //this.spanRef.current.parentElement.appendChild(this.props.content);
    } else {
      setTimeout(this.addEmberChildren, 50);
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
          <div ref={this.spanRef}><span>Dummy Children</span></div>
        </Dialog>
      </ReactConditionalThemeProvider>
    );
  }
}

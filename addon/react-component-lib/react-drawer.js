import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { ReactBaseWithTheme } from './base/react-base-with-theme';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import { ReactChildrenHolder } from './utility/react-children-holder';


export class ReactDrawer extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.addedEmberChildren = false;
    this.state = {
      classString: props.classString,
      open: props.open,
      sx: props.sx,
      theme: props.theme,
      variant: props.variant
    };

    this.addEventListeners = this.addEventListeners.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.componentRef = React.createRef();

  }

  componentDidMount() {
    setTimeout(this.addEventListeners, 500);
  }

  componentWillUnmount() {
    this.componentRef && this.componentRef.current && this.componentRef.current.removeEventListener('keydown', this.onKeyDown);
  }

  addEventListeners() {
    if (this.componentRef && this.componentRef.current) {
      this.componentRef.current.addEventListener('keydown', this.onKeyDown);
    } else {
      setTimeout(this.addEventListeners, 500);
    }
  }

  onKeyDown() {
    //having this somehow enables the underlying react functionality.  Without this, esc and clicking to close doesn't work.
  }

  render() {

    const {
      classString,
      open,
      sx,
      theme,
      variant
    } = this.state;

    //need children holder to handle mounting and unmounting callbacks when
    //variant is 'temporary' which is the default and keepMounted cannot be set.
    this.useReactChildrenHolder = (this.props.modalProps && !this.props.modalProps.keepMounted) ||
                                  (!this.props.modalProps && variant !== 'permanent' && variant !== 'persistent');

    const ComponentToUse = this.props.swipeable ? SwipeableDrawer : Drawer;
    return (
      <ReactConditionalThemeProvider theme={theme}>
        <ComponentToUse
          ref={this.componentRef}
          {...(this.props.anchor ? {anchor: this.props.anchor} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.elevation ? {elevation: this.props.elevation} : {})}
          {...(this.props.hideBackdrop ? {hideBackdrop: this.props.hideBackdrop} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(this.props.modalProps ? {ModalProps: this.props.modalProps} : {})}
          {...(this.props.onClose ? {onClose: this.props.onClose} : {})}
          {...(open ? {open: open} : {open: false})}
          {...(this.props.paperProps ? {PaperProps: this.props.paperProps} : {})}
          {...(this.props.slideProps ? {SlideProps: this.props.slideProps} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.transitionDuration ? {transitionDuration: this.props.transitionDuration} : {})}
          {...(variant ? {variant: variant} : {})}
          {...(this.props.onOpen ? {onOpen: this.props.onOpen} : {})}
          {...(this.props.disableBackdropTransition ? {disableBackdropTransition: this.props.disableBackdropTransition} : {})}
          {...(this.props.disableDiscovery ? {disableDiscovery: this.props.disableDiscovery} : {})}
          {...(this.props.disableSwipeToOpen ? {disableSwipeToOpen: this.props.disableSwipeToOpen} : {})}
          {...(this.props.hysteresis ? {hysteresis: this.props.hysteresis} : {})}
          {...(this.props.minFlingVelocity ? {minFlingVelocity: this.props.minFlingVelocity} : {})}
          {...(this.props.swipeAreaProps ? {SwipeAreaProps: this.props.swipeAreaProps} : {})}
          {...(this.props.swipeAreaWidth ? {swipeAreaWidth: this.props.swipeAreaWidth} : {})}
        >
          {this.useReactChildrenHolder &&
            <ReactChildrenHolder
              {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
              {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
            />
          }

        </ComponentToUse>
      </ReactConditionalThemeProvider>
    );
  }
}

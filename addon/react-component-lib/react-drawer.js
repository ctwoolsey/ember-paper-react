import React from 'react';
import { ReactChildrenHolder } from './utility/react-children-holder';
import { ReactBase } from './base/react-base';
import { DrawerStateProps, DrawerPropsNotForComponent } from './utility/props/drawer-props';
import Drawer from '@mui/material/Drawer';


export class ReactDrawer extends ReactBase{
  constructor(props) {
    super(props);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.componentRef = React.createRef();
    this.initialize(DrawerStateProps(), DrawerPropsNotForComponent());
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

  renderComponent() {
    this.useReactChildrenHolder = (this.props.ModalProps && !this.props.ModalProps.keepMounted) ||
      (!this.props.ModalProps && this.statePropsForComponent.variant !== 'permanent' && this.statePropsForComponent.variant !== 'persistent');

    return (
      <Drawer
        ref={this.componentRef}
        {...(this.placeProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        {this.useReactChildrenHolder &&
          <ReactChildrenHolder
            {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
            {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
          />
        }
      </Drawer>
    )
  }

  /*render() {

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
  }*/
}

import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  title: null,
  arrow: null,
  classes: null,
  describeChild: null,
  disableFocusListener: null,
  disableHoverListener: null,
  disableInteractive: null,
  disableTouchListener: null,
  enterDelay: null,
  enterNextDelay: null,
  enterTouchDelay: null,
  followCursor: null,
  id: null,
  leaveDelay: null,
  leaveTouchDelay: null,
  onClose: null,
  onOpen: null,
  open: null,
  placement: null,
  PopperComponent: null,
  PopperProps: null,
  sx: null,
  TransitionComponent: null,
  TransitionProps: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  title: null,
  disableFocusListener: null,
  disableHoverListener: null,
  disableInteractive: null,
  disableTouchListener: null,
  open: null,
  placement: null,
  sx: null
}

const statefulPropsNotForComponent = {
}

const TooltipProps = () => {return Object.assign({}, DivNativeProps(), props)};
const TooltipStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps)};
const TooltipPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const TooltipStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { TooltipProps, TooltipStateProps, TooltipPropsNotForComponent, TooltipStatePropsNotForComponent }

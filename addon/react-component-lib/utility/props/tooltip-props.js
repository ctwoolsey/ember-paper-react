import { DivNativePropObj } from './native-global-props/div-native-props';

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

const TooltipProps = () => {return Object.assign({}, DivNativePropObj.props(), props)};
const TooltipStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps)};
const TooltipPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const TooltipStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const TooltipPropObj = {
  props: TooltipProps,
  stateProps: TooltipStateProps,
  propsNotForComponent: TooltipPropsNotForComponent,
  statefulPropsNotForComponent: TooltipStatePropsNotForComponent
}

export { TooltipPropObj }

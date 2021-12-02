import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  title: undefined,
  arrow: undefined,
  classes: undefined,
  describeChild: undefined,
  disableFocusListener: undefined,
  disableHoverListener: undefined,
  disableInteractive: undefined,
  disableTouchListener: undefined,
  enterDelay: undefined,
  enterNextDelay: undefined,
  enterTouchDelay: undefined,
  followCursor: undefined,
  id: undefined,
  leaveDelay: undefined,
  leaveTouchDelay: undefined,
  onClose: undefined,
  onOpen: undefined,
  open: undefined,
  placement: undefined,
  PopperComponent: undefined,
  PopperProps: undefined,
  sx: undefined,
  TransitionComponent: undefined,
  TransitionProps: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  title: undefined,
  disableFocusListener: undefined,
  disableHoverListener: undefined,
  disableInteractive: undefined,
  disableTouchListener: undefined,
  open: undefined,
  placement: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
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

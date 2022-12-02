import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  action: undefined,
  anchorOrigin: undefined,
  autoHideDuration: undefined,
  children: undefined,
  classes: undefined,
  ClickAwayListenerProps: undefined,
  ContentProps: undefined,
  disableWindowBlurListener: undefined,
  key: undefined,
  message: undefined,
  onClose: undefined,
  open: undefined,
  resumeHideDuration: undefined,
  sx: undefined,
  transitionDuration: undefined,
  TransitionProps: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  action: undefined,
  anchorOrigin: undefined,
  autoHideDuration: undefined,
  ClickAwayListenerProps: undefined,
  ContentProps: undefined,
  disableWindowBlurListener: undefined,
  key: undefined,
  message: undefined,
  open: undefined,
  resumeHideDuration: undefined,
  sx: undefined,
  transitionDuration: undefined,
  TransitionProps: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const SnackbarProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const SnackbarStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const SnackbarPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const SnackbarStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const SnackbarPropObj = {
  props: SnackbarProps,
  stateProps: SnackbarStateProps,
  propsNotForComponent: SnackbarPropsNotForComponent,
  statefulPropsNotForComponent: SnackbarStatePropsNotForComponent
}

export { SnackbarPropObj }

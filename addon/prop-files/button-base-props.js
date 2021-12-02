import { ButtonNativePropObj } from './native-global-props/button-native-props';

const props = {
  action: undefined,
  centerRipple: undefined,
  children: undefined,
  class: undefined,
  component: undefined,
  disabled: undefined,
  disableRipple: undefined,
  disableTouchRipple: undefined,
  focusRipple: undefined,
  focusVisibleClassName: undefined,
  LinkComponent: undefined,
  onFocusVisible: undefined,
  sx: undefined,
  TouchRippleProps: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
  children: undefined
}

const ButtonBaseProps = () => {return Object.assign({}, ButtonNativePropObj.props(), props)};
const ButtonBaseStateProps = () => {return Object.assign({}, ButtonNativePropObj.stateProps(), stateProps)};
const ButtonBasePropsNotForComponent = () => {return Object.assign({}, ButtonNativePropObj.propsNotForComponent(), propsNotForComponent)};
const ButtonBaseStatePropsNotForComponent = () => {return Object.assign({}, ButtonNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const ButtonBasePropObj = {
  props: ButtonBaseProps,
  stateProps: ButtonBaseStateProps,
  propsNotForComponent: ButtonBasePropsNotForComponent,
  statefulPropsNotForComponent: ButtonBaseStatePropsNotForComponent
}

export { ButtonBasePropObj }

import { ButtonNativePropObj } from './native-global-props/button-native-props';

const props = {
  action: null,
  centerRipple: null,
  children: null,
  class: null,
  component: null,
  disabled: null,
  disableRipple: null,
  disableTouchRipple: null,
  focusRipple: null,
  focusVisibleClassName: null,
  LinkComponent: null,
  onFocusVisible: null,
  sx: null,
  TouchRippleProps: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
  children: null
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

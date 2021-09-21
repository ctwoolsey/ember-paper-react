import { ButtonNativeProps, ButtonNativeStateProps, ButtonNativeNotForComponent, ButtonNativeStatePropsNotForComponent } from './native-global-props/button-native-props';

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
}

const ButtonBaseProps = () => {return Object.assign({}, ButtonNativeProps(), props)};
const ButtonBaseStateProps = () => {return Object.assign({}, ButtonNativeStateProps(), stateProps)};
const ButtonBasePropsNotForComponent = () => {return Object.assign({}, ButtonNativeNotForComponent(), propsNotForComponent)};
const ButtonBaseStatePropsNotForComponent = () => {return Object.assign({}, ButtonNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent, ButtonBaseStatePropsNotForComponent }

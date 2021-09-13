import { ButtonNativeProps } from "./native-global-props/button-native-props";
import { ButtonNativeStateProps } from "./native-global-props/button-native-props";

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

const stateProps = {
}

const ButtonBaseProps = () => {return Object.assign({}, ButtonNativeProps(), props)};
const ButtonBaseStateProps = () => {return Object.assign({}, ButtonNativeStateProps(), stateProps)};

export { ButtonBaseProps, ButtonBaseStateProps }

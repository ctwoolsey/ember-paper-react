import { ThemeProps, ThemeStateProps } from "./native-global-props/theme-props";
import { ButtonBaseProps, ButtonBaseStateProps } from "./button-base-props";

const props = {
  children: null,
  class: null,
  color: null,
  component: null,
  disabled: null,
  disableElevation: null,
  disableFocusRipple: null,
  disableRipple: null,
  endIcon: null,
  fullWidth: null,
  href: null,
  size: null,
  startIcon: null,
  sx: null,
  variant: null,
  ref: null
};

const stateProps = {
  class: null,
  color: null,
  disabled: null,
  disableElevation: null,
  disableFocusRipple: null,
  disableRipple: null,
  fullWidth: null,
  href: null,
  size: null,
  sx: null,
  variant: null
}

const ButtonProps = Object.assign({}, props, ButtonBaseProps, ThemeProps);
const ButtonStateProps = Object.assign({}, stateProps, ButtonBaseStateProps, ThemeStateProps);

export { ButtonProps, ButtonStateProps }

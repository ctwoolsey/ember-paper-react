import { ButtonBaseProps } from "./button-base-props";
import { ButtonBaseStateProps } from "./button-base-props";

const props = {
  children: null,
  class: '',
  color: null,
  component: null,
  disabled: null,
  disableElevation: null,
  disableFocusRipple: null,
  disableRipple: null,
  endIcon: null,
  fullWidth: null,
  href: null,
  size: '',
  startIcon: null,
  sx: null,
  variant: null,
  onClick: null,
  id: null,
  theme: null,
  ref: null
};

const stateProps = {
  class: '',
  color: null,
  disabled: null,
  disableElevation: null,
  disableFocusRipple: null,
  disableRipple: null,
  fullWidth: null,
  href: null,
  size: null,
  sx: null,
  variant: null,
  theme: null
}

const ButtonStatePropsArgs = (args) => {
  return {
    class: args.class,
    color: args.color,
    disabled: args.disabled,
    disableElevation: args.disableElevation,
    disableFocusRipple: args.disableFocusRipple,
    disableRipple: args.disableRipple,
    fullWidth: args.fullWidth,
    href: args.href,
    size: args.size,
    sx: args.sx,
    variant: args.variant,
    theme: args.theme
  }
}

const ButtonProps = Object.assign({}, props, ButtonBaseProps);
const ButtonStateProps = Object.assign({}, stateProps, ButtonBaseStateProps);

export { ButtonProps, ButtonStateProps, ButtonStatePropsArgs }

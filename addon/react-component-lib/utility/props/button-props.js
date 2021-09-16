import { ThemeProps, ThemePropsNotForComponent, ThemeStateProps } from './theme-props';
import { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent } from './button-base-props';

const props = {
  children: null,
  classes: null,
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

const statefulPropsNotForComponent = {
}

const ButtonProps = () => { return Object.assign({}, ThemeProps(), ButtonBaseProps(), props)};
const ButtonStateProps = () => { return Object.assign({}, ThemeStateProps(), ButtonBaseStateProps(), stateProps)};
const ButtonPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), ButtonBasePropsNotForComponent(), statefulPropsNotForComponent)};

export { ButtonProps, ButtonStateProps, ButtonPropsNotForComponent }

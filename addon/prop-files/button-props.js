import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  children: undefined,
  classes: undefined,
  color: undefined,
  component: undefined,
  disabled: undefined,
  disableElevation: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  endIcon: undefined,
  fullWidth: undefined,
  href: undefined,
  size: undefined,
  startIcon: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  disabled: undefined,
  disableElevation: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  endIcon: undefined,
  fullWidth: undefined,
  href: undefined,
  size: undefined,
  startIcon: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const ButtonProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonBasePropObj.props(), props)};
const ButtonStateProps = () => { return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps)};
const ButtonPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const ButtonStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const ButtonPropObj = {
  props: ButtonProps,
  stateProps: ButtonStateProps,
  propsNotForComponent: ButtonPropsNotForComponent,
  statefulPropsNotForComponent: ButtonStatePropsNotForComponent
}

export { ButtonPropObj }

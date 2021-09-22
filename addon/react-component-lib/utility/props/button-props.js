import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

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

const propsNotForComponent = {
}

const stateProps = {
  color: null,
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
  variant: null
}

const statefulPropsNotForComponent = {
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

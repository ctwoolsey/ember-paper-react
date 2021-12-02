import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  children: undefined,
  classes: undefined,
  color: undefined,
  disabled: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  edge: undefined,
  size: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  disabled: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  edge: undefined,
  size: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const IconButtonProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonBasePropObj.props(), props) };
const IconButtonStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps) };
const IconButtonPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const IconButtonStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const IconButtonPropObj = {
  props: IconButtonProps,
  stateProps: IconButtonStateProps,
  propsNotForComponent: IconButtonPropsNotForComponent,
  statefulPropsNotForComponent: IconButtonStatePropsNotForComponent
}

export { IconButtonPropObj }

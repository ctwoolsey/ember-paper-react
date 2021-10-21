import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  children: null,
  classes: null,
  color: null,
  disabled: null,
  disableFocusRipple: null,
  disableRipple: null,
  edge: null,
  size: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  disabled: null,
  disableFocusRipple: null,
  disableRipple: null,
  edge: null,
  size: null,
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
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

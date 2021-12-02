import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  children: undefined,
  classes: undefined,
  color: undefined,
  component: undefined,
  disabled: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  href: undefined,
  size: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  disabled: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  href: undefined,
  size: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const FabProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonBasePropObj.props(), props) };
const FabStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps) };
const FabPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const FabStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const FabPropObj = {
  props: FabProps,
  stateProps: FabStateProps,
  propsNotForComponent: FabPropsNotForComponent,
  statefulPropsNotForComponent: FabStatePropsNotForComponent
}

export { FabPropObj }

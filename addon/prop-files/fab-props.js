import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  children: null,
  classes: null,
  color: null,
  component: null,
  disabled: null,
  disableFocusRipple: null,
  disableRipple: null,
  href: null,
  size: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  disabled: null,
  disableFocusRipple: null,
  disableRipple: null,
  href: null,
  size: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
  children: null
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

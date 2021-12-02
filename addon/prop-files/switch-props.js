import { ButtonBasePropObj } from './button-base-props';
import { ThemePropObj } from './theme-props';

const props = {
  checked: undefined,
  checkedIcon: undefined,
  classes: undefined,
  color: undefined,
  defaultChecked: undefined,
  disabled: undefined,
  disableRipple: undefined,
  edge: undefined,
  icon: undefined,
  id: undefined,
  inputProps: undefined,
  inputRef: undefined,
  onChange: undefined,
  required: undefined,
  size: undefined,
  sx: undefined,
  value: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  checked: undefined,
  color: undefined,
  disabled: undefined,
  disableRipple: undefined,
  required: undefined,
  size: undefined,
  sx: undefined,
  value: undefined
}

const statefulPropsNotForComponent = {
  theme: undefined
}

const SwitchProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonBasePropObj.props(), props) };
const SwitchStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps) };
const SwitchPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const SwitchStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const SwitchPropObj = {
  props: SwitchProps,
  stateProps: SwitchStateProps,
  propsNotForComponent: SwitchPropsNotForComponent,
  statefulPropsNotForComponent: SwitchStatePropsNotForComponent
}

export { SwitchPropObj }

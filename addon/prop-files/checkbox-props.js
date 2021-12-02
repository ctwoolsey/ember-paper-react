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
  icon: undefined,
  id: undefined,
  indeterminate: undefined,
  indeterminateIcon: undefined,
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
  indeterminate: undefined,
  required: undefined,
  size: undefined,
  sx: undefined,
  value: undefined
}

const statefulPropsNotForComponent = {
  theme: undefined
}

const CheckboxProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonBasePropObj.props(), props) };
const CheckboxStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps) };
const CheckboxPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const CheckboxStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CheckboxPropObj = {
  props: CheckboxProps,
  stateProps: CheckboxStateProps,
  propsNotForComponent: CheckboxPropsNotForComponent,
  statefulPropsNotForComponent: CheckboxStatePropsNotForComponent
}

export { CheckboxPropObj }

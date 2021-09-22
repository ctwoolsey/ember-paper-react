import { ButtonBasePropObj } from './button-base-props';
import { ThemePropObj } from './theme-props';

const props = {
  checked: null,
  checkedIcon: null,
  classes: null,
  color: null,
  defaultChecked: null,
  disabled: null,
  disableRipple: null,
  icon: null,
  id: null,
  indeterminate: null,
  indeterminateIcon: null,
  inputProps: null,
  inputRef: null,
  onChange: null,
  required: null,
  size: null,
  sx: null,
  value: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  checked: null,
  color: null,
  disabled: null,
  disableRipple: null,
  indeterminate: null,
  required: null,
  size: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
  theme: null
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

import { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent, ButtonBaseStatePropsNotForComponent } from './button-base-props';
import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';

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

const CheckboxProps = () => { return Object.assign({}, ThemeProps(), ButtonBaseProps(), props) };
const CheckboxStateProps = () => {return Object.assign({}, ThemeStateProps(), ButtonBaseStateProps(), stateProps) };
const CheckboxPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), ButtonBasePropsNotForComponent(), propsNotForComponent)};
const CheckboxStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), ButtonBaseStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { CheckboxProps, CheckboxStateProps, CheckboxPropsNotForComponent, CheckboxStatePropsNotForComponent }

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
  edge: null,
  icon: null,
  id: null,
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
  required: null,
  size: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
  theme: null
}

const SwitchProps = () => { return Object.assign({}, ThemeProps(), ButtonBaseProps(), props) };
const SwitchStateProps = () => {return Object.assign({}, ThemeStateProps(), ButtonBaseStateProps(), stateProps) };
const SwitchPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), ButtonBasePropsNotForComponent(), propsNotForComponent)};
const SwitchStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), ButtonBaseStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { SwitchProps, SwitchStateProps, SwitchPropsNotForComponent, SwitchStatePropsNotForComponent }

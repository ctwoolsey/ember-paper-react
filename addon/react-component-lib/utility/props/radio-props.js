import { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent, ButtonBaseStatePropsNotForComponent } from './button-base-props';
import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';

const props = {
  checked: null,
  checkedIcon: null,
  classes: null,
  color: null,
  disabled: null,
  disableRipple: null,
  icon: null,
  id: null,
  inputProps: null,
  inputRef: null,
  name: null,
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

const RadioProps = () => { return Object.assign({}, ThemeProps(), ButtonBaseProps(), props) };
const RadioStateProps = () => {return Object.assign({}, ThemeStateProps(), ButtonBaseStateProps(), stateProps) };
const RadioPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), ButtonBasePropsNotForComponent(), propsNotForComponent)};
const RadioStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), ButtonBaseStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { RadioProps, RadioStateProps, RadioPropsNotForComponent, RadioStatePropsNotForComponent }

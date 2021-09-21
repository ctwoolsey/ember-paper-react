import { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent } from './native-global-props/div-native-props';
import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';

const props = {
  children: null,
  classes: null,
  color: null,
  component: null,
  disabled: null,
  error: null,
  focused: null,
  fullWidth: null,
  hiddenLabel: null,
  margin: null,
  required: null,
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
  error: null,
  focused: null,
  fullWidth: null,
  hiddenLabel: null,
  required: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const FormControlProps = () => { return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const FormControlStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };
const FormControlPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), DivNativeNotForComponent(), propsNotForComponent)};
const FormControlStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), DivNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { FormControlProps, FormControlStateProps, FormControlPropsNotForComponent, FormControlStatePropsNotForComponent }

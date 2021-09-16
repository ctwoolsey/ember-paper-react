import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';
import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent} from './theme-props';

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
const FormControlPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), statefulPropsNotForComponent)};

export { FormControlProps, FormControlStateProps, FormControlPropsNotForComponent }

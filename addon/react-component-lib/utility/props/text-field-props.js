import { FormControlProps, FormControlStateProps, FormControlPropsNotForComponent } from './form-control-props';
import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent} from './theme-props';

const props = {
  autoComplete: null,
  autoFocus: null,
  classes: null,
  color: null,
  defaultValue: null,
  disabled: null,
  error: null,
  FormHelperTextProps: null,
  fullWidth: null,
  helperText: null,
  id: null,
  InputLabelProps: null,
  inputProps: null,
  InputProps: null,
  inputRef: null,
  label: null,
  margin: null,
  maxRows: null,
  minRows: null,
  multiline: null,
  name: null,
  onChange: null,
  placeholder: null,
  required: null,
  rows: null,
  select: null,
  SelectProps: null,
  size: null,
  sx: null,
  type: null,
  value: null,
  variant: null,
  ref: null
};

const stateProps = {
  color: null,
  defaultValue: null,
  disabled: null,
  error: null,
  fullWidth: null,
  helperText: null,
  label: null,
  margin: null,
  maxRows: null,
  minRows: null,
  multiline: null,
  placeholder: null,
  required: null,
  rows: null,
  size: null,
  sx: null,
  value: null,
  variant: null,
}

const statefulPropsNotForComponent = {
}

const TextFieldProps = () => { return Object.assign({}, ThemeProps(), FormControlProps(), props) };
const TextFieldStateProps = () => {return Object.assign({}, ThemeStateProps(), FormControlStateProps(), stateProps) };
const TextFieldPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), FormControlPropsNotForComponent(), statefulPropsNotForComponent)};

export { TextFieldProps, TextFieldStateProps, TextFieldPropsNotForComponent }

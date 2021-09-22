import { FormControlPropObj } from './form-control-props';
import { ThemePropObj } from './theme-props';

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

const propsNotForComponent = {
}

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

const TextFieldProps = () => { return Object.assign({}, ThemePropObj.props(), FormControlPropObj.props(), props) };
const TextFieldStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), FormControlPropObj.stateProps(), stateProps) };
const TextFieldPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), FormControlPropObj.propsNotForComponent(), propsNotForComponent)};
const TextFieldStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), FormControlPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const TextFieldPropObj = {
  props: TextFieldProps,
  stateProps: TextFieldStateProps,
  propsNotForComponent: TextFieldPropsNotForComponent,
  statefulPropsNotForComponent: TextFieldStatePropsNotForComponent
}

export { TextFieldPropObj }

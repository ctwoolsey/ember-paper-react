import { FormControlPropObj } from './form-control-props';
import { ThemePropObj } from './theme-props';

const props = {
  autoComplete: undefined,
  autoFocus: undefined,
  classes: undefined,
  color: undefined,
  defaultValue: undefined,
  disabled: undefined,
  error: undefined,
  FormHelperTextProps: undefined,
  fullWidth: undefined,
  helperText: undefined,
  id: undefined,
  InputLabelProps: undefined,
  inputProps: undefined,
  InputProps: undefined,
  inputRef: undefined,
  label: undefined,
  margin: undefined,
  maxRows: undefined,
  minRows: undefined,
  multiline: undefined,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  required: undefined,
  rows: undefined,
  select: undefined,
  SelectProps: undefined,
  size: undefined,
  sx: undefined,
  type: undefined,
  value: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  defaultValue: undefined,
  disabled: undefined,
  error: undefined,
  fullWidth: undefined,
  helperText: undefined,
  label: undefined,
  margin: undefined,
  maxRows: undefined,
  minRows: undefined,
  multiline: undefined,
  placeholder: undefined,
  required: undefined,
  rows: undefined,
  size: undefined,
  sx: undefined,
  value: undefined,
  variant: undefined
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

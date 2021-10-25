import { InputNativePropObj } from './native-global-props/input-native-props';

const props = {
  autoComplete: null,
  autoFocus: null,
  classes: null,
  color: null,
  components: null,
  componentsProps: null,
  defaultValue: null,
  disabled: null,
  endAdornment: null,
  error: null,
  fullWidth: null,
  id: null,
  inputComponent: null,
  inputProps: null,
  inputRef: null,
  margin: null,
  maxRows: null,
  minRows: null,
  multiline: null,
  name: null,
  onBlur: null,
  onChange: null,
  placeholder: null,
  readOnly: null,
  required: null,
  rows: null,
  size: null,
  startAdornment: null,
  sx: null,
  type: null,
  value: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  autoComplete: null,
  autoFocus: null,
  color: null,
  componentsProps: null,
  disabled: null,
  error: null,
  fullWidth: null,
  inputProps: null,
  margin: null,
  maxRows: null,
  minRows: null,
  multiline: null,
  placeholder: null,
  readOnly: null,
  required: null,
  rows: null,
  size: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
}

const InputBaseProps = () => {return Object.assign({}, InputNativePropObj.props(), props)};
const InputBaseStateProps = () => {return Object.assign({}, InputNativePropObj.stateProps(), stateProps)};
const InputBasePropsNotForComponent = () => {return Object.assign({}, InputNativePropObj.propsNotForComponent(), propsNotForComponent)};
const InputBaseStatePropsNotForComponent = () => {return Object.assign({}, InputNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const InputBasePropObj = {
  props: InputBaseProps,
  stateProps: InputBaseStateProps,
  propsNotForComponent: InputBasePropsNotForComponent,
  statefulPropsNotForComponent: InputBaseStatePropsNotForComponent
}

export { InputBasePropObj }

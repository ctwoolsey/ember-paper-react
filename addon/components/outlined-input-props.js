import { InputBasePropObj } from "../prop-files/input-base-props";

const props = {
  autoComplete: null,
  autoFocus: null,
  classes: null,
  color: null,
  components: null,
  defaultValue: null,
  disabled: null,
  endAdornment: null,
  error: null,
  fullWidth: null,
  id: null,
  inputComponent: null,
  inputProps: null,
  inputRef: null,
  label: null,
  margin: null,
  maxRows: null,
  minRows: null,
  multiline: null,
  name: null,
  notched: null,
  onChange: null,
  placeholder: null,
  readOnly: null,
  required: null,
  rows: null,
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
  components: null,
  disabled: null,
  error: null,
  fullWidth: null,
  inputProps: null,
  label: null,
  margin: null,
  maxRows: null,
  minRows: null,
  multiline: null,
  notched: null,
  onChange: null,
  placeholder: null,
  readOnly: null,
  required: null,
  rows: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
}

const OutlinedInputProps = () => {return Object.assign({}, InputBasePropObj.props(), props)};
const OutlinedInputStateProps = () => {return Object.assign({}, InputBasePropObj.stateProps(), stateProps)};
const OutlinedInputPropsNotForComponent = () => {return Object.assign({}, InputBasePropObj.propsNotForComponent(), propsNotForComponent)};
const OutlinedInputStatePropsNotForComponent = () => {return Object.assign({}, InputBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const OutlinedInputPropObj = {
  props: OutlinedInputProps,
  stateProps: OutlinedInputStateProps,
  propsNotForComponent: OutlinedInputPropsNotForComponent,
  statefulPropsNotForComponent: OutlinedInputStatePropsNotForComponent
}

export { OutlinedInputPropObj }

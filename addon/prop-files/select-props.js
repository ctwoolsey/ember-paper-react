import { ThemePropObj } from './theme-props';
import { OutlinedInputPropObj } from "../components/outlined-input-props";

const props = {
  autoWidth: null,
  children: null,
  classes: null,
  defaultValue: null,
  displayEmpty: null,
  IconComponent: null,
  id: null,
  input: null,
  inputProps: null,
  label: null,
  labelId: null,
  MenuProps: null,
  multiple: null,
  native: null,
  onChange: null,
  onClose: null,
  onOpen: null,
  open: null,
  renderValue: null,
  SelectDisplayProps: null,
  sx: null,
  value: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  autoWidth: null,
  IconComponent: null,
  id: null,
  input: null,
  inputProps: null,
  label: null,
  labelId: null,
  MenuProps: null,
  open: null,
  renderValue: null,
  SelectDisplayProps: null,
  sx: null,
  value: null,
  variant: null
}

const statefulPropsNotForComponent = {
  children: null
}

const SelectProps = () => { return Object.assign({}, ThemePropObj.props(), OutlinedInputPropObj.props(), props) };
const SelectStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), OutlinedInputPropObj.stateProps(), stateProps) };
const SelectPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), OutlinedInputPropObj.propsNotForComponent(), propsNotForComponent)};
const SelectStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), OutlinedInputPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const SelectPropObj = {
  props: SelectProps,
  stateProps: SelectStateProps,
  propsNotForComponent: SelectPropsNotForComponent,
  statefulPropsNotForComponent: SelectStatePropsNotForComponent
}

export { SelectPropObj }

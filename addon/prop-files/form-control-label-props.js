import { LabelNativePropObj } from './native-global-props/label-native-props';

const props = {
  control: undefined,
  checked: undefined,
  classes: undefined,
  componentsProps: undefined,
  disabled: undefined,
  disableTypography: undefined,
  inputRef: undefined,
  label: undefined,
  labelPlacement: undefined,
  onChange: undefined,
  sx: undefined,
  value: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  checked: undefined,
  disabled: undefined,
  disableTypography: undefined,
  label: undefined,
  labelPlacement: undefined,
  sx: undefined,
  value: undefined
}

const statefulPropsNotForComponent = {
  theme: undefined
}

const FormControlLabelProps = () => { return Object.assign({}, LabelNativePropObj.props(), props) };
const FormControlLabelStateProps = () => {return Object.assign({}, LabelNativePropObj.stateProps(), stateProps) };
const FormControlLabelPropsNotForComponent = () => {return Object.assign({}, LabelNativePropObj.propsNotForComponent(), propsNotForComponent)};
const FormControlLabelStatePropsNotForComponent = () => {return Object.assign({}, LabelNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const FormControlLabelPropObj = {
  props: FormControlLabelProps,
  stateProps: FormControlLabelStateProps,
  propsNotForComponent: FormControlLabelPropsNotForComponent,
  statefulPropsNotForComponent: FormControlLabelStatePropsNotForComponent
}

export { FormControlLabelPropObj }

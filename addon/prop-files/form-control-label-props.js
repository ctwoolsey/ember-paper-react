import { LabelNativePropObj } from './native-global-props/label-native-props';

const props = {
  control: null,
  checked: null,
  classes: null,
  componentsProps: null,
  disabled: null,
  disableTypography: null,
  inputRef: null,
  label: null,
  labelPlacement: null,
  onChange: null,
  sx: null,
  value: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  checked: null,
  disabled: null,
  disableTypography: null,
  label: null,
  labelPlacement: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
  theme: null
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

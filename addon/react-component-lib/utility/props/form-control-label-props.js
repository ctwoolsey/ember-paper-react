import { LabelNativeProps, LabelNativeStateProps, LabelNativeNotForComponent, LabelNativeStatePropsNotForComponent } from './native-global-props/label-native-props';

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

const FormControlLabelProps = () => { return Object.assign({}, LabelNativeProps(), props) };
const FormControlLabelStateProps = () => {return Object.assign({}, LabelNativeStateProps(), stateProps) };
const FormControlLabelPropsNotForComponent = () => {return Object.assign({}, LabelNativeNotForComponent(), propsNotForComponent)};
const FormControlLabelStatePropsNotForComponent = () => {return Object.assign({}, LabelNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { FormControlLabelProps, FormControlLabelStateProps, FormControlLabelPropsNotForComponent, FormControlLabelStatePropsNotForComponent }

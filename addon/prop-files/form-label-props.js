import { LabelNativePropObj } from './native-global-props/label-native-props';
import { ThemePropObj } from "./theme-props";

const props = {
  children: null,
  classes: null,
  color: null,
  component: null,
  disabled: null,
  error: null,
  filled: null,
  focused: null,
  required: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  disabled: null,
  error: null,
  filled: null,
  focused: null,
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
}

const FormLabelProps = () => { return Object.assign({}, ThemePropObj.props(), LabelNativePropObj.props(), props) };
const FormLabelStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), LabelNativePropObj.stateProps(), stateProps) };
const FormLabelPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), LabelNativePropObj.propsNotForComponent(), propsNotForComponent)};
const FormLabelStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), LabelNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const FormLabelPropObj = {
  props: FormLabelProps,
  stateProps: FormLabelStateProps,
  propsNotForComponent: FormLabelPropsNotForComponent,
  statefulPropsNotForComponent: FormLabelStatePropsNotForComponent
}

export { FormLabelPropObj }

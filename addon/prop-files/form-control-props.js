import { DivNativePropObj } from './native-global-props/div-native-props';
import { ThemePropObj } from './theme-props';

const props = {
  children: undefined,
  classes: undefined,
  color: undefined,
  component: undefined,
  disabled: undefined,
  error: undefined,
  focused: undefined,
  fullWidth: undefined,
  hiddenLabel: undefined,
  margin: undefined,
  required: undefined,
  size: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  disabled: undefined,
  error: undefined,
  focused: undefined,
  fullWidth: undefined,
  hiddenLabel: undefined,
  required: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const FormControlProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const FormControlStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const FormControlPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const FormControlStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const FormControlPropObj = {
  props: FormControlProps,
  stateProps: FormControlStateProps,
  propsNotForComponent: FormControlPropsNotForComponent,
  statefulPropsNotForComponent: FormControlStatePropsNotForComponent
}

export { FormControlPropObj }

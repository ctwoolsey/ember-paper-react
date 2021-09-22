import { DivNativePropObj } from './native-global-props/div-native-props';
import { ThemePropObj } from './theme-props';

const props = {
  children: null,
  classes: null,
  color: null,
  component: null,
  disabled: null,
  error: null,
  focused: null,
  fullWidth: null,
  hiddenLabel: null,
  margin: null,
  required: null,
  size: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  disabled: null,
  error: null,
  focused: null,
  fullWidth: null,
  hiddenLabel: null,
  required: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
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

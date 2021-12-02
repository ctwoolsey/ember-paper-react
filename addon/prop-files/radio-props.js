import { ButtonBasePropObj } from './button-base-props';
import { ThemePropObj } from './theme-props';

const props = {
  checked: undefined,
  checkedIcon: undefined,
  classes: undefined,
  color: undefined,
  disabled: undefined,
  disableRipple: undefined,
  icon: undefined,
  id: undefined,
  inputProps: undefined,
  inputRef: undefined,
  name: undefined,
  onChange: undefined,
  required: undefined,
  size: undefined,
  sx: undefined,
  value: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  checked: undefined,
  color: undefined,
  disabled: undefined,
  disableRipple: undefined,
  required: undefined,
  size: undefined,
  sx: undefined,
  value: undefined
}

const statefulPropsNotForComponent = {
  theme: undefined
}

const RadioProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonBasePropObj.props(), props) };
const RadioStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps) };
const RadioPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const RadioStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const RadioPropObj = {
  props: RadioProps,
  stateProps: RadioStateProps,
  propsNotForComponent: RadioPropsNotForComponent,
  statefulPropsNotForComponent: RadioStatePropsNotForComponent
}

export { RadioPropObj }

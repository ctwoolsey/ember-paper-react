import { ButtonBasePropObj } from './button-base-props';
import { ThemePropObj } from './theme-props';

const props = {
  checked: null,
  checkedIcon: null,
  classes: null,
  color: null,
  disabled: null,
  disableRipple: null,
  icon: null,
  id: null,
  inputProps: null,
  inputRef: null,
  name: null,
  onChange: null,
  required: null,
  size: null,
  sx: null,
  value: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  checked: null,
  color: null,
  disabled: null,
  disableRipple: null,
  required: null,
  size: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
  theme: null
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

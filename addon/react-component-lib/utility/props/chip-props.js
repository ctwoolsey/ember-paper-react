import { DivNativePropObj } from './native-global-props/div-native-props';
import { ThemePropObj } from './theme-props';

const props = {
  avatar: null,
  children: null,
  classes: null,
  clickable: null,
  color: null,
  component: null,
  deleteIcon: null,
  disabled: null,
  icon: null,
  label: null,
  onDelete: null,
  size: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  avatar: null,
  clickable: null,
  color: null,
  deleteIcon: null,
  disabled: null,
  icon: null,
  label: null,
  size: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
  theme: null
}

const ChipProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const ChipStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const ChipPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const ChipStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const ChipPropObj = {
  props: ChipProps,
  stateProps: ChipStateProps,
  propsNotForComponent: ChipPropsNotForComponent,
  statefulPropsNotForComponent: ChipStatePropsNotForComponent
}

export { ChipPropObj }

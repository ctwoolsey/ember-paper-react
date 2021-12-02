import { DivNativePropObj } from './native-global-props/div-native-props';
import { ThemePropObj } from './theme-props';

const props = {
  avatar: undefined,
  classes: undefined,
  clickable: undefined,
  color: undefined,
  component: undefined,
  deleteIcon: undefined,
  disabled: undefined,
  icon: undefined,
  label: undefined,
  onDelete: undefined,
  size: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
  avatar: undefined //avatar is only set via attribute children
}

const stateProps = {
  clickable: undefined,
  color: undefined,
  deleteIcon: undefined,
  disabled: undefined,
  icon: undefined,
  label: undefined,
  size: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  theme: undefined
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

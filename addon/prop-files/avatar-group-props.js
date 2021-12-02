import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  max: undefined,
  spacing: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  max: undefined,
  spacing: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const AvatarGroupProps = () => {return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const AvatarGroupStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const AvatarGroupPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent) };
const AvatarGroupStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent) };

const AvatarGroupPropObj = {
  props: AvatarGroupProps,
  stateProps: AvatarGroupStateProps,
  propsNotForComponent: AvatarGroupPropsNotForComponent,
  statefulPropsNotForComponent: AvatarGroupStatePropsNotForComponent
}

export { AvatarGroupPropObj }

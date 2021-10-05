import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  max: null,
  spacing: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  max: null,
  spacing: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
  children: null
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

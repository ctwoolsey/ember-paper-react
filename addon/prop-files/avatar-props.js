import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  alt: undefined,
  children: undefined,
  classes: undefined,
  component: undefined,
  imgProps: undefined,
  sizes: undefined,
  src: undefined,
  srcSet: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  imgProps: undefined,
  sizes: undefined,
  src: undefined,
  srcSet: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const AvatarProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const AvatarStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const AvatarPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const AvatarStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const AvatarPropObj = {
  props: AvatarProps,
  stateProps: AvatarStateProps,
  propsNotForComponent: AvatarPropsNotForComponent,
  statefulPropsNotForComponent: AvatarStatePropsNotForComponent
}

export { AvatarPropObj }

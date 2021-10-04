import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  alt: null,
  children: null,
  classes: null,
  component: null,
  imgProps: null,
  sizes: null,
  src: null,
  srcSet: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  imgProps: null,
  sizes: null,
  src: null,
  srcSet: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
  children: null
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

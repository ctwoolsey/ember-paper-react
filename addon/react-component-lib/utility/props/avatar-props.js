import { ThemeProps, ThemePropsNotForComponent, ThemeStateProps } from './theme-props';
import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

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

const stateProps = {
  imgProps: null,
  sizes: null,
  src: null,
  srcSet: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const AvatarProps = () => { return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const AvatarStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };
const AvatarPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), statefulPropsNotForComponent)};

export { AvatarProps, AvatarStateProps, AvatarPropsNotForComponent }

import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
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
}

const AvatarProps = () => { return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const AvatarStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };
const AvatarPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), propsNotForComponent)};
const AvatarStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { AvatarProps, AvatarStateProps, AvatarPropsNotForComponent, AvatarStatePropsNotForComponent }

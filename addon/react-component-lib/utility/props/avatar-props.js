import { ThemeProps, ThemeStateProps } from "./native-global-props/theme-props";
import { DivNativeProps, DivNativeStateProps } from "./native-global-props/div-native-props";

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

const AvatarProps = Object.assign({}, ThemeProps, DivNativeProps, props);
const AvatarStateProps = Object.assign({}, ThemeStateProps, DivNativeStateProps, stateProps);

export { AvatarProps, AvatarStateProps }

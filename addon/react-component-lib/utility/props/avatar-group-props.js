import { ThemeProps, ThemeStateProps } from "./native-global-props/theme-props";
import { DivNativeProps, DivNativeStateProps } from "./native-global-props/div-native-props";

const props = {
  children: null,
  classes: null,
  max: null,
  spacing: null,
  sx: null,
  variant: null,
  ref: null
};

const stateProps = {
  //max: null,   Commented out values are still stateful, just handled locally
  //spacing: null,
  sx: null,
  //variant: null
}

const AvatarGroupProps = () => {return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const AvatarGroupStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };

export { AvatarGroupProps, AvatarGroupStateProps }

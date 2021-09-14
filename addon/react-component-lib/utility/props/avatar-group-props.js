import { ThemeProps, ThemePropsNotForComponent, ThemeStateProps } from "./theme-props";
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
  sx: null
}

const statefulPropsNotForComponent = {
  max: null,
  spacing: null,
  variant: null
}

const AvatarGroupProps = () => {return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const AvatarGroupStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };
const AvatarGroupNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), statefulPropsNotForComponent) };

export { AvatarGroupProps, AvatarGroupStateProps, AvatarGroupNotForComponent }

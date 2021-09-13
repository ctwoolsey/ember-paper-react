import { ThemeProps, ThemeStateProps } from "./native-global-props/theme-props";
import { DivNativeProps, DivNativeStateProps } from "./native-global-props/div-native-props";

const props = {
  children: null,
  classes: null,
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  ref: null
};

const stateProps = {
  elevation: null,
  square: null,
  sx: null,
  variant: null
}

const PaperProps = Object.assign({}, ThemeProps, DivNativeProps, props);
const PaperStateProps = Object.assign({}, ThemeStateProps, DivNativeStateProps, stateProps );

export { PaperProps, PaperStateProps }

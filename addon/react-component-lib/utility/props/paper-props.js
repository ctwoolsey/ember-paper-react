import { ThemeProps, ThemeStateProps } from "./native-global-props/theme-props";
import { DivNativeProps, DivNativeStateProps } from "./native-global-props/div-native-props";

const props = {
  children: null,
  class: null,
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  ref: null
};

const stateProps = {
  class: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null
}

const PaperProps = Object.assign({}, props, DivNativeProps, ThemeProps);
const PaperStateProps = Object.assign({}, stateProps, DivNativeStateProps, ThemeStateProps);

export { PaperProps, PaperStateProps }

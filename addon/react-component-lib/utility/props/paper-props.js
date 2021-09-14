import { ThemeProps, ThemePropsNotForComponent, ThemeStateProps } from "./theme-props";
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

const statefulPropsNotForComponent = {
}

const PaperProps = () => {return Object.assign({}, ThemeProps(), DivNativeProps(), props)};
const PaperStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps)};
const PaperPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), statefulPropsNotForComponent)};

export { PaperProps, PaperStateProps, PaperPropsNotForComponent }

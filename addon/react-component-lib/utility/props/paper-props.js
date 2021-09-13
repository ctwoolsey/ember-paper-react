import { DivNativeProps } from "./native-global-props/div-native-props";
import { DivNativeStateProps } from "./native-global-props/div-native-props";

const props = {
  children: null,
  class: '',
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  id: null,
  theme: null,
  ref: null
};

const stateProps = {
  class: '',
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  theme: null
}

const PaperProps = Object.assign({}, props, DivNativeProps);
const PaperStateProps = Object.assign({}, stateProps, DivNativeStateProps);

export { PaperProps, PaperStateProps }

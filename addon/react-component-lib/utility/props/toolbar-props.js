import { DivNativeProps, DivNativeStateProps } from "./native-global-props/div-native-props";

const props = {
  children: null,
  classes: null,
  component: null,
  disableGutters: null,
  sx: null,
  variant: null,
  ref: null
};

const stateProps = {
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const ToolbarProps = () => {return Object.assign({}, DivNativeProps(), props)};
const ToolbarStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps)};
const ToolbarPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { ToolbarProps, ToolbarStateProps, ToolbarPropsNotForComponent }

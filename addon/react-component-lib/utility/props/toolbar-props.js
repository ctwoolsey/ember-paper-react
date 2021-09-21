import { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  component: null,
  disableGutters: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const ToolbarProps = () => {return Object.assign({}, DivNativeProps(), props)};
const ToolbarStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps)};
const ToolbarPropsNotForComponent = () => {return Object.assign({}, DivNativeNotForComponent(), propsNotForComponent)};
const ToolbarStatePropsNotForComponent = () => {return Object.assign({}, DivNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { ToolbarProps, ToolbarStateProps, ToolbarPropsNotForComponent, ToolbarStatePropsNotForComponent }

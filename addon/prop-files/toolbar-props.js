import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  component: undefined,
  disableGutters: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const ToolbarProps = () => {return Object.assign({}, DivNativePropObj.props(), props)};
const ToolbarStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps)};
const ToolbarPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const ToolbarStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const ToolbarPropObj = {
  props: ToolbarProps,
  stateProps: ToolbarStateProps,
  propsNotForComponent: ToolbarPropsNotForComponent,
  statefulPropsNotForComponent: ToolbarStatePropsNotForComponent
}

export { ToolbarPropObj }

import { DivNativePropObj } from './native-global-props/div-native-props';

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
  children: null
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

import { ThemePropObj } from './theme-props';
import { SpanNativePropObj } from './native-global-props/span-native-props';

const props = {
  baseClassName: undefined,
  children: undefined,
  classes: undefined,
  color: undefined,
  component: undefined,
  fontSize: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  baseClassName: undefined,
  color: undefined,
  fontSize: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined,
  iconName: undefined
}

const IconProps = () => {return Object.assign({}, ThemePropObj.props(), SpanNativePropObj.props(), props)};
const IconStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), SpanNativePropObj.stateProps(), stateProps)};
const IconPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), SpanNativePropObj.propsNotForComponent(), propsNotForComponent)};
const IconStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), SpanNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const IconPropObj = {
  props: IconProps,
  stateProps: IconStateProps,
  propsNotForComponent: IconPropsNotForComponent,
  statefulPropsNotForComponent: IconStatePropsNotForComponent
}

export { IconPropObj }

import { ThemePropObj } from './theme-props';
import { SpanNativePropObj } from './native-global-props/span-native-props';

const props = {
  baseClassName: null,
  children: null,
  classes: null,
  color: null,
  component: null,
  fontSize: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  baseClassName: null,
  color: null,
  fontSize: null,
  sx: null
}

const statefulPropsNotForComponent = {
  children: null,
  iconName: null
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

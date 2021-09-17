import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
import { SpanNativeProps, SpanNativeStateProps } from './native-global-props/span-native-props';

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
  iconName: null
}

const IconProps = () => {return Object.assign({}, ThemeProps(), SpanNativeProps(), props)};
const IconStateProps = () => {return Object.assign({}, ThemeStateProps(), SpanNativeStateProps(), stateProps)};
const IconPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), propsNotForComponent)};
const IconStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { IconProps, IconStateProps, IconPropsNotForComponent, IconStatePropsNotForComponent }

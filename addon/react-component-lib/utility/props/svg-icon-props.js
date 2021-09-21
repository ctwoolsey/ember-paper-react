import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
import { SvgNativeProps, SvgNativeStateProps, SvgNativeNotForComponent, SvgNativeStatePropsNotForComponent} from "./native-global-props/svg-native-props";

const props = {
  children: null,
  classes: null,
  color: null,
  component: null,
  fontSize: null,
  htmlColor: null,
  shapeRendering: null,
  sx: null,
  titleAccess: null,
  viewBox: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  fontSize: null,
  htmlColor: null,
  sx: null,
  viewBox: null
}

const statefulPropsNotForComponent = {
}

const SvgIconProps = () => { return Object.assign({}, ThemeProps(), SvgNativeProps(), props) };
const SvgIconStateProps = () => {return Object.assign({}, ThemeStateProps(), SvgNativeStateProps(), stateProps)};
const SvgIconPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), SvgNativeNotForComponent(), propsNotForComponent)};
const SvgIconStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), SvgNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent, SvgIconStatePropsNotForComponent }

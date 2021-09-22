import { ThemePropObj } from './theme-props';
import { SvgNativePropObj} from "./native-global-props/svg-native-props";

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

const SvgIconProps = () => { return Object.assign({}, ThemePropObj.props(), SvgNativePropObj.props(), props) };
const SvgIconStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), SvgNativePropObj.stateProps(), stateProps)};
const SvgIconPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), SvgNativePropObj.propsNotForComponent(), propsNotForComponent)};
const SvgIconStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), SvgNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const SvgIconPropObj = {
  props: SvgIconProps,
  stateProps: SvgIconStateProps,
  propsNotForComponent: SvgIconPropsNotForComponent,
  statefulPropsNotForComponent: SvgIconStatePropsNotForComponent
}

export { SvgIconPropObj }

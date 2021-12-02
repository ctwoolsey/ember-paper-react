import { ThemePropObj } from './theme-props';
import { SvgNativePropObj} from "./native-global-props/svg-native-props";

const props = {
  children: undefined,
  classes: undefined,
  color: undefined,
  component: undefined,
  fontSize: undefined,
  htmlColor: undefined,
  shapeRendering: undefined,
  sx: undefined,
  titleAccess: undefined,
  viewBox: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  fontSize: undefined,
  htmlColor: undefined,
  sx: undefined,
  viewBox: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
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

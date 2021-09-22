/*import { GlobalSvgProps, GlobalSvgStateProps, GlobalSvgNotForComponent, GlobalSvgStatePropsNotForComponent } from './global-svg-props';*/
import { GlobalSvgPropObj } from "./global-svg-props";

const props = {
  baseProfile: null,
  contentScriptType: null,
  contentStyleType: null,
  height: null,
  preserveAspectRatio: null,
  version: null,
  viewBox: null,
  width: null,
  x: null,
  y: null
};

const propsNotForComponent = {
}

const stateProps = {
  height: null,
  preserveAspectRatio: null,
  viewBox: null,
  width: null,
  x: null,
  y: null
}

const statefulPropsNotForComponent = {
}

const SvgNativeProps = () => {return Object.assign({}, GlobalSvgPropObj.props(), props)};
const SvgNativeStateProps = () => {return Object.assign({}, GlobalSvgPropObj.stateProps(), stateProps)};
const SvgNativePropsNotForComponent = () => {return Object.assign({}, GlobalSvgPropObj.propsNotForComponent(), propsNotForComponent)};
const SvgNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalSvgPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const SvgNativePropObj = {
  props: SvgNativeProps,
  stateProps: SvgNativeStateProps,
  propsNotForComponent: SvgNativePropsNotForComponent,
  statefulPropsNotForComponent: SvgNativeStatePropsNotForComponent
}

export { SvgNativePropObj }

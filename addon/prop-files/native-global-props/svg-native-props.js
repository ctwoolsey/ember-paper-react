import { GlobalSvgPropObj } from "./global-svg-props";

const props = {
  baseProfile: undefined,
  contentScriptType: undefined,
  contentStyleType: undefined,
  height: undefined,
  preserveAspectRatio: undefined,
  version: undefined,
  viewBox: undefined,
  width: undefined,
  x: undefined,
  y: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  height: undefined,
  preserveAspectRatio: undefined,
  viewBox: undefined,
  width: undefined,
  x: undefined,
  y: undefined
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

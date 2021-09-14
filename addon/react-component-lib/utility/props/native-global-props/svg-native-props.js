import { GlobalSvgProps, GlobalSvgStateProps } from "./global-svg-props";

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

const stateProps = {
  height: null,
  preserveAspectRatio: null,
  viewBox: null,
  width: null,
  x: null,
  y: null
}

const SvgNativeProps = () => {return Object.assign({}, GlobalSvgProps(), props)};
const SvgNativeStateProps = () => {return Object.assign({}, GlobalSvgStateProps(), stateProps)};

export { SvgNativeProps, SvgNativeStateProps }

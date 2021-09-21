import { GlobalSvgProps, GlobalSvgStateProps, GlobalSvgNotForComponent, GlobalSvgStatePropsNotForComponent } from './global-svg-props';

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

const SvgNativeProps = () => {return Object.assign({}, GlobalSvgProps(), props)};
const SvgNativeStateProps = () => {return Object.assign({}, GlobalSvgStateProps(), stateProps)};
const SvgNativeNotForComponent = () => {return Object.assign({}, GlobalSvgNotForComponent(), propsNotForComponent)};
const SvgNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalSvgStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { SvgNativeProps, SvgNativeStateProps, SvgNativeNotForComponent, SvgNativeStatePropsNotForComponent }

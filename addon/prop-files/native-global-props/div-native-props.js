import { GlobalHtmlPropObj } from "./global-html-props";

const DivNativeProps = () => {return Object.assign({}, GlobalHtmlPropObj.props())};
const DivNativeStateProps = () => {return Object.assign({}, GlobalHtmlPropObj.stateProps())};
const DivNativePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.propsNotForComponent())};
const DivNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.statefulPropsNotForComponent())};

const DivNativePropObj = {
  props: DivNativeProps,
  stateProps: DivNativeStateProps,
  propsNotForComponent: DivNativePropsNotForComponent,
  statefulPropsNotForComponent: DivNativeStatePropsNotForComponent
}

export { DivNativePropObj }

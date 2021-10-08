import { GlobalHtmlPropObj } from "./global-html-props";

const SpanNativeProps = () => {return Object.assign({}, GlobalHtmlPropObj.props())};
const SpanNativeStateProps = () => {return Object.assign({}, GlobalHtmlPropObj.stateProps())};
const SpanNativePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.propsNotForComponent())};
const SpanNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.statefulPropsNotForComponent())};

const SpanNativePropObj = {
  props: SpanNativeProps,
  stateProps: SpanNativeStateProps,
  propsNotForComponent: SpanNativePropsNotForComponent,
  statefulPropsNotForComponent: SpanNativeStatePropsNotForComponent
}

export { SpanNativePropObj }

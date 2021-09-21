import {
  GlobalHtmlNotForComponent,
  GlobalHtmlProps,
  GlobalHtmlStateProps,
  GlobalHtmlStatePropsNotForComponent
} from "./global-html-props";

const SpanNativeProps = () => {return Object.assign({}, GlobalHtmlProps())};
const SpanNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps())};
const SpanNativeNotForComponent = () => {return Object.assign({}, GlobalHtmlNotForComponent())};
const SpanNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlStatePropsNotForComponent())};

export { SpanNativeProps, SpanNativeStateProps, SpanNativeNotForComponent, SpanNativeStatePropsNotForComponent }

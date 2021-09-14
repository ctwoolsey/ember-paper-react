import { GlobalHtmlProps, GlobalHtmlStateProps } from "./global-html-props";

const SpanNativeProps = () => {return Object.assign({}, GlobalHtmlProps())};
const SpanNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps())};

export { SpanNativeProps, SpanNativeStateProps }

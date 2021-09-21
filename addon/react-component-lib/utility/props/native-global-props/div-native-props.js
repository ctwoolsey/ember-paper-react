import {
  GlobalHtmlNotForComponent,
  GlobalHtmlProps,
  GlobalHtmlStateProps,
  GlobalHtmlStatePropsNotForComponent
} from "./global-html-props";

const DivNativeProps = () => {return Object.assign({}, GlobalHtmlProps())};
const DivNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps())};
const DivNativeNotForComponent = () => {return Object.assign({}, GlobalHtmlNotForComponent())};
const DivNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlStatePropsNotForComponent())};

export { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent }

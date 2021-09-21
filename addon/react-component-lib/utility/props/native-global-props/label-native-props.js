import {
  GlobalHtmlNotForComponent,
  GlobalHtmlProps,
  GlobalHtmlStateProps,
  GlobalHtmlStatePropsNotForComponent
} from "./global-html-props";

const props = {
  for: null
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const LabelNativeProps = () => {return Object.assign({}, GlobalHtmlProps(), props)};
const LabelNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps(), stateProps)};
const LabelNativeNotForComponent = () => {return Object.assign({}, GlobalHtmlNotForComponent(), propsNotForComponent)};
const LabelNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { LabelNativeProps, LabelNativeStateProps, LabelNativeNotForComponent, LabelNativeStatePropsNotForComponent }

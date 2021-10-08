import { GlobalHtmlPropObj } from "./global-html-props";

const props = {
  for: null
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const LabelNativeProps = () => {return Object.assign({}, GlobalHtmlPropObj.props(), props)};
const LabelNativeStateProps = () => {return Object.assign({}, GlobalHtmlPropObj.stateProps(), stateProps)};
const LabelNativePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.propsNotForComponent(), propsNotForComponent)};
const LabelNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const LabelNativePropObj = {
  props: LabelNativeProps,
  stateProps: LabelNativeStateProps,
  propsNotForComponent: LabelNativePropsNotForComponent,
  statefulPropsNotForComponent: LabelNativeStatePropsNotForComponent
}

export { LabelNativePropObj }

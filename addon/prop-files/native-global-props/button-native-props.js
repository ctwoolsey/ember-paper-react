import { GlobalHtmlPropObj } from './global-html-props';

const props = {
  autoFocus: undefined,
  disabled: undefined,
  form: undefined,
  formAction: undefined,
  formEnctype: undefined,
  formMethod: undefined,
  formNoValidate: undefined,
  formTarget: undefined,
  frameName: undefined,
  name: undefined,
  type: undefined,
  value: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const ButtonNativeProps = () => {return Object.assign({}, GlobalHtmlPropObj.props(), props)};
const ButtonNativeStateProps = () => {return Object.assign({}, GlobalHtmlPropObj.stateProps(), stateProps)};
const ButtonNativePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.propsNotForComponent(), propsNotForComponent)};
const ButtonNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const ButtonNativePropObj = {
  props: ButtonNativeProps,
  stateProps: ButtonNativeStateProps,
  propsNotForComponent: ButtonNativePropsNotForComponent,
  statefulPropsNotForComponent: ButtonNativeStatePropsNotForComponent
}

export { ButtonNativePropObj }

import { GlobalHtmlPropObj } from './global-html-props';

const props = {
  autoFocus: null,
  disabled: null,
  form: null,
  formAction: null,
  formEnctype: null,
  formMethod: null,
  formNoValidate: null,
  formTarget: null,
  frameName: null,
  name: null,
  type: null,
  value: null
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

import { GlobalHtmlPropObj } from "./global-html-props";

const props = {
  accept: null,
  alt: null,
  autocomplete: null,
  autofocus: null,
  capture: null,
  checked: null,
  dirname: null,
  disabled: null,
  form: null,
  formaction: null,
  formenctype: null,
  formmethod: null,
  formnovalidate: null,
  formtarget: null,
  height: null,
  list: null,
  max: null,
  maxlength: null,
  min: null,
  minlength: null,
  multiple: null,
  name: null,
  pattern: null,
  placeholder: null,
  readonly: null,
  required: null,
  size: null,
  src: null,
  step: null,
  type: null,
  value: null,
  width: null,

  //non-standard
  autocorrect: null,
  incremental: null,
  mozactionhint: null,
  orient: null,
  results: null,
  webkitdirectory: null
};

const propsNotForComponent = {
}

const stateProps = {
  accept: null,
  alt: null,
  autocomplete: null,
  autofocus: null,
  capture: null,
  checked: null,
  disabled: null,
  formaction: null,
  formenctype: null,
  formmethod: null,
  formnovalidate: null,
  formtarget: null,
  height: null,
  list: null,
  max: null,
  maxlength: null,
  min: null,
  minlength: null,
  multiple: null,
  name: null,
  pattern: null,
  placeholder: null,
  readonly: null,
  required: null,
  size: null,
  src: null,
  step: null,
  type: null,
  value: null,
  width: null,

  //non-standard
  autocorrect: null,
  incremental: null,
  mozactionhint: null,
  orient: null,
  results: null,
  webkitdirectory: null
}

const statefulPropsNotForComponent = {
}

const InputNativeProps = () => {return Object.assign({}, GlobalHtmlPropObj.props(), props)};
const InputNativeStateProps = () => {return Object.assign({}, GlobalHtmlPropObj.stateProps(), stateProps)};
const InputNativePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.propsNotForComponent(), propsNotForComponent)};
const InputNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const InputNativePropObj = {
  props: InputNativeProps,
  stateProps: InputNativeStateProps,
  propsNotForComponent: InputNativePropsNotForComponent,
  statefulPropsNotForComponent: InputNativeStatePropsNotForComponent
}

export { InputNativePropObj }

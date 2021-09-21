import { GlobalHtmlProps, GlobalHtmlStateProps, GlobalHtmlNotForComponent, GlobalHtmlStatePropsNotForComponent } from './global-html-props';

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

const ButtonNativeProps = () => {return Object.assign({}, GlobalHtmlProps(), props)};
const ButtonNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps(), stateProps)};
const ButtonNativeNotForComponent = () => {return Object.assign({}, GlobalHtmlNotForComponent(), propsNotForComponent)};
const ButtonNativeStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { ButtonNativeProps, ButtonNativeStateProps, ButtonNativeNotForComponent, ButtonNativeStatePropsNotForComponent }

import { GlobalHtmlProps } from "./global-html-props";
import { GlobalHtmlStateProps } from "./global-html-props";

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

const stateProps = {
}

const ButtonNativeProps = () => {return Object.assign({}, GlobalHtmlProps(), props)};
const ButtonNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps(), stateProps)};

export { ButtonNativeProps, ButtonNativeStateProps }

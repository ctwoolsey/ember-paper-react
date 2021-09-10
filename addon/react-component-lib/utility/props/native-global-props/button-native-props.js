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

const ButtonNativeProps = Object.assign({}, props, GlobalHtmlProps);
const ButtonNativeStateProps = Object.assign({}, stateProps, GlobalHtmlStateProps);

export { ButtonNativeProps, ButtonNativeStateProps }

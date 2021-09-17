import { GlobalHtmlProps, GlobalHtmlStateProps } from './global-html-props';

const props = {
  for: null
};

const stateProps = {
}

const LabelNativeProps = () => {return Object.assign({}, GlobalHtmlProps(), props)};
const LabelNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps(), stateProps)};

export { LabelNativeProps, LabelNativeStateProps }

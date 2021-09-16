import { GlobalHtmlProps, GlobalHtmlStateProps } from './global-html-props';

const DivNativeProps = () => {return Object.assign({}, GlobalHtmlProps())};
const DivNativeStateProps = () => {return Object.assign({}, GlobalHtmlStateProps())};

export { DivNativeProps, DivNativeStateProps }

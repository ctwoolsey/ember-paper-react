import { FadePropObj } from './fade-props';
import { GlobalHtmlPropObj } from './native-global-props/global-html-props';

const props = {
  open: undefined,
  children: undefined,
  classes: undefined,
  component: undefined,
  components: undefined,
  componentsProps: undefined,
  invisible: undefined,
  sx: undefined,
  transitionDuration: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  open: undefined,

  classes: undefined,
  component: undefined,
  components: undefined,
  componentsProps: undefined,
  invisible: undefined,
  sx: undefined,
  transitionDuration: undefined,
}

const statefulPropsNotForComponent = {
  children: undefined
}

const BackdropProps = () => { return Object.assign({}, GlobalHtmlPropObj.props(), FadePropObj.props(), props)};
const BackdropStateProps = () => { return Object.assign({}, GlobalHtmlPropObj.stateProps(), FadePropObj.stateProps(), stateProps)};
const BackdropPropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.propsNotForComponent(), FadePropObj.propsNotForComponent(), propsNotForComponent)};
const BackdropStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlPropObj.statefulPropsNotForComponent(), FadePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const BackdropPropObj = {
  props: BackdropProps,
  stateProps: BackdropStateProps,
  propsNotForComponent: BackdropPropsNotForComponent,
  statefulPropsNotForComponent: BackdropStatePropsNotForComponent
}

export { BackdropPropObj }

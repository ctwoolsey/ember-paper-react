import { FadePropObj } from './fade-props';
import { GlobalHtmlPropObj } from './native-global-props/global-html-props';

const props = {
  open: null,
  children: null,
  classes: null,
  component: null,
  components: null,
  componentsProps: null,
  invisible: null,
  sx: null,
  transitionDuration: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  open: null,

  classes: null,
  component: null,
  components: null,
  componentsProps: null,
  invisible: null,
  sx: null,
  transitionDuration: null,
}

const statefulPropsNotForComponent = {
  children: null
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

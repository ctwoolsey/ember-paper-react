import { FadeProps, FadeStateProps, FadePropsNotForComponent, FadeStatePropsNotForComponent } from './fade-props';
import { GlobalHtmlProps, GlobalHtmlStateProps, GlobalHtmlNotForComponent, GlobalHtmlStatePropsNotForComponent } from './native-global-props/global-html-props';

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
}

const BackdropProps = () => { return Object.assign({}, GlobalHtmlProps(), FadeProps(), props)};
const BackdropStateProps = () => { return Object.assign({}, GlobalHtmlStateProps(), FadeStateProps(), stateProps)};
const BackdropPropsNotForComponent = () => {return Object.assign({}, GlobalHtmlNotForComponent(), FadePropsNotForComponent(), propsNotForComponent)};
const BackdropStatePropsNotForComponent = () => {return Object.assign({}, GlobalHtmlStatePropsNotForComponent(), FadeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { BackdropProps, BackdropStateProps, BackdropPropsNotForComponent, BackdropStatePropsNotForComponent }

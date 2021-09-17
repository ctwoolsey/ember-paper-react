import { FadeProps, FadeStateProps, FadePropsNotForComponent, FadeStatePropsNotForComponent } from './fade-props';
import { GlobalHtmlProps, GlobalHtmlStateProps } from './native-global-props/global-html-props';

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
const BackdropPropsNotForComponent = () => {return Object.assign({}, FadePropsNotForComponent(), propsNotForComponent)};
const BackdropStatePropsNotForComponent = () => {return Object.assign({}, FadeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { BackdropProps, BackdropStateProps, BackdropPropsNotForComponent, BackdropStatePropsNotForComponent }

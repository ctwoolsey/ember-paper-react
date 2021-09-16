import { TransitionProps, TransitionStateProps, TransitionPropsNotForComponent } from './transition-props'

const props = {
  appear: null,
  children: null,
  easing: null,
  in: null,
  timeout: null,
  ref: null
};

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const FadeProps = () => { return Object.assign({}, TransitionProps(), props)};
const FadeStateProps = () => { return Object.assign({}, TransitionStateProps(), stateProps)};
const FadePropsNotForComponent = () => {return Object.assign({}, TransitionPropsNotForComponent(), statefulPropsNotForComponent)};

export { FadeProps, FadeStateProps, FadePropsNotForComponent }

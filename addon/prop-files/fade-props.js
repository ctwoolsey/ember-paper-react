import { TransitionPropObj } from './transition-props'

const props = {
  appear: undefined,
  children: undefined,
  easing: undefined,
  in: undefined,
  timeout: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
  children: undefined
}

const FadeProps = () => { return Object.assign({}, TransitionPropObj.props(), props)};
const FadeStateProps = () => { return Object.assign({}, TransitionPropObj.stateProps(), stateProps)};
const FadePropsNotForComponent = () => {return Object.assign({}, TransitionPropObj.propsNotForComponent(), propsNotForComponent)};
const FadeStatePropsNotForComponent = () => {return Object.assign({}, TransitionPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const FadePropObj = {
  props: FadeProps,
  stateProps: FadeStateProps,
  propsNotForComponent: FadePropsNotForComponent,
  statefulPropsNotForComponent: FadeStatePropsNotForComponent
}

export { FadePropObj }

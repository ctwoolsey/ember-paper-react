const props = {
  nodeRef: undefined,
  children: undefined,
  in: undefined,
  mountOnEnter: undefined,
  unmountOnExit: undefined,
  appear: undefined,
  enter: undefined,
  exit: undefined,
  timeout: undefined,
  addEndListener: undefined,
  onEnter: undefined,
  onEntering: undefined,
  onEntered: undefined,
  onExit: undefined,
  onExiting: undefined,
  onExited: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
  children: undefined
}

const TransitionProps = () => { return Object.assign({}, props)};
const TransitionStateProps = () => { return Object.assign({}, stateProps)};
const TransitionPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const TransitionStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const TransitionPropObj = {
  props: TransitionProps,
  stateProps: TransitionStateProps,
  propsNotForComponent: TransitionPropsNotForComponent,
  statefulPropsNotForComponent: TransitionStatePropsNotForComponent
}

export { TransitionPropObj }

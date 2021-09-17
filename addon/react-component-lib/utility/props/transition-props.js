const props = {
  nodeRef: null,
  children: null,
  in: null,
  mountOnEnter: null,
  unmountOnExit: null,
  appear: null,
  enter: null,
  exit: null,
  timeout: null,
  addEndListener: null,
  onEnter: null,
  onEntering: null,
  onEntered: null,
  onExit: null,
  onExiting: null,
  onExited: null
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const TransitionProps = () => { return Object.assign({}, props)};
const TransitionStateProps = () => { return Object.assign({}, stateProps)};
const TransitionPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const TransitionStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { TransitionProps, TransitionStateProps, TransitionPropsNotForComponent, TransitionStatePropsNotForComponent }

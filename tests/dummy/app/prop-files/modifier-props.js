const props = {
  a: null,
  b: null,
  c: null,
  d: null
};

const propsNotForComponent = {
  e: null
}

const stateProps = {
  a: null,
  b: null
}

const statefulPropsNotForComponent = {
  c: null
}

const ModifierProps = () => { return Object.assign({}, props) };
const ModifierStateProps = () => {return Object.assign({}, stateProps) };
const ModifierPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const ModifierStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const ModifierPropObj = {
  props: ModifierProps,
  stateProps: ModifierStateProps,
  propsNotForComponent: ModifierPropsNotForComponent,
  statefulPropsNotForComponent: ModifierStatePropsNotForComponent
}

export { ModifierPropObj }

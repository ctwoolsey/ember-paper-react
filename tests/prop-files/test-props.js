const props = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
  label: undefined,
  id: undefined,
  class: undefined,
  ref: undefined
};

const propsNotForComponent = {
  e: undefined
}

const stateProps = {
  b: undefined,
  c: undefined,
  label: undefined,
  class: undefined
}

const statefulPropsNotForComponent = {
  d: undefined,
  theme: undefined
}

const TestProps = () => { return Object.assign({}, props) };
const TestStateProps = () => {return Object.assign({}, stateProps) };
const TestPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const TestStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const TestPropObj = {
  props: TestProps,
  stateProps: TestStateProps,
  propsNotForComponent: TestPropsNotForComponent,
  statefulPropsNotForComponent: TestStatePropsNotForComponent
}

export { TestPropObj }

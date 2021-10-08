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
  b: null,
  c: null
}

const statefulPropsNotForComponent = {
  d: null
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

const props = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D'
};

const propsNotForComponent = {
  e: 'E-prop-not-for-component'
}

const stateProps = {
  b: 'B-state',
  c: 'C-state'
}

const statefulPropsNotForComponent = {
  d: 'D-state-not-for-component'
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

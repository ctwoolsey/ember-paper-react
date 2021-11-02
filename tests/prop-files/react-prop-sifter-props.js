const props = {
  a: null,
  b: null,
  c: null,
  d: null,
  label: null,
  id: null,
  class: null,
  ref: null
};

const propsNotForComponent = {
  e: null
}

const stateProps = {
  b: null,
  c: null,
  label: null,
  class: null
}

const statefulPropsNotForComponent = {
  d: null,
  theme: null
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

const PassedProps = {
  a: 'A',
  b: 'B',
  d: 'D',
  e: 'E',
  label: 'myLabel',
  id: 'myId',
  class: 'myClass',
  theme: 'myTheme',
  role: 'myRole',
  'aria-tester': 'myAria',
  'data-tester': 'myData'
};

export { TestPropObj, PassedProps }

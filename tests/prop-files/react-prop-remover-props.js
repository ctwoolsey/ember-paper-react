const staticPropsA = {
  a: null,
  b: null,
  w: null
};

const propsNotForComponentA = {
  c: null,
  d: null,
  x: null
}

const statePropsA = {
  e: null,
  f: null,
  y: null
}

const statefulPropsNotForComponentA = {
  g: null,
  h: null,
  z: null
}

const TestSiftedPropObjA = {
  staticProps: staticPropsA,
  stateProps: statePropsA,
  propsNotForComponent: propsNotForComponentA,
  statefulPropsNotForComponent: statefulPropsNotForComponentA
}

////

const staticPropsB = {
  a: null,
  i: null,
  w: null
};

const propsNotForComponentB = {
  c: null,
  j: null,
  x: null
}

const statePropsB = {
  e: null,
  k: null,
  y: null
}

const statefulPropsNotForComponentB = {
  g: null,
  l: null,
  z: null
}

const TestSiftedPropObjB = {
  staticProps: staticPropsB,
  stateProps: statePropsB,
  propsNotForComponent: propsNotForComponentB,
  statefulPropsNotForComponent: statefulPropsNotForComponentB
}



export { TestSiftedPropObjA, TestSiftedPropObjB }

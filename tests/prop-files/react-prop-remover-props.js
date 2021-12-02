const staticPropsA = {
  a: undefined,
  b: undefined,
  w: undefined
};

const propsNotForComponentA = {
  c: undefined,
  d: undefined,
  x: undefined
}

const statePropsA = {
  e: undefined,
  f: undefined,
  y: undefined
}

const statefulPropsNotForComponentA = {
  g: undefined,
  h: undefined,
  z: undefined
}

const TestSiftedPropObjA = {
  staticProps: staticPropsA,
  stateProps: statePropsA,
  propsNotForComponent: propsNotForComponentA,
  statefulPropsNotForComponent: statefulPropsNotForComponentA
}

////

const staticPropsB = {
  a: undefined,
  i: undefined,
  w: undefined
};

const propsNotForComponentB = {
  c: undefined,
  j: undefined,
  x: undefined
}

const statePropsB = {
  e: undefined,
  k: undefined,
  y: undefined
}

const statefulPropsNotForComponentB = {
  g: undefined,
  l: undefined,
  z: undefined
}

const TestSiftedPropObjB = {
  staticProps: staticPropsB,
  stateProps: statePropsB,
  propsNotForComponent: propsNotForComponentB,
  statefulPropsNotForComponent: statefulPropsNotForComponentB
}



export { TestSiftedPropObjA, TestSiftedPropObjB }

const props = {
  mask: undefined,
  accept: undefined,
  complete: undefined,
  prepare: undefined,
  commit: undefined,
  lazy: undefined,
  overwrite: undefined,
  autofix: undefined,
  blocks: undefined,
  scale: undefined,
  signed: undefined,
  thousandsSeparator: undefined,
  padFractionalZeros: undefined,
  normalizeZeros: undefined,
  radix: undefined,
  mapToRadix: undefined,
  min: undefined,
  max: undefined,
  definitions: undefined,
  placeholderChar: undefined,
  from: undefined,
  to: undefined,
  enum: undefined,
  maxLength: undefined,
  parse: undefined,
  startsWith: undefined,
  country: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const IMaskTextFieldProps = () => { return Object.assign({}, props) };
const IMaskTextFieldStateProps = () => {return Object.assign({}, stateProps) };
const IMaskTextFieldPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const IMaskTextFieldStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const IMaskTextFieldPropObj = {
  props: IMaskTextFieldProps,
  stateProps: IMaskTextFieldStateProps,
  propsNotForComponent: IMaskTextFieldPropsNotForComponent,
  statefulPropsNotForComponent: IMaskTextFieldStatePropsNotForComponent
}

export { IMaskTextFieldPropObj }

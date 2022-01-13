const props = {
  thousandSeparator: undefined,
  decimalSeparator: undefined,
  thousandsGroupStyle: undefined,
  decimalScale: undefined,
  fixedDecimalScale: undefined,
  allowNegative: undefined,
  allowEmptyFormatting: undefined,
  allowLeadingZeros: undefined,
  prefix: undefined,
  suffix: undefined,
  defaultValue: undefined,
  isNumericString: undefined,
  displayType: undefined,
  type: undefined,
  format: undefined,
  removeFormatting: undefined,
  mask: undefined,
  customInput: undefined,
  onValueChange: undefined,
  isAllowed: undefined,
  renderText: undefined,
  getInputRef: undefined,
  allowedDecimalSeparators: undefined,
  customNumerals: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  value: undefined
}

const statefulPropsNotForComponent = {
}

const NumberFormatTextFieldProps = () => { return Object.assign({}, props) };
const NumberFormatTextFieldStateProps = () => {return Object.assign({}, stateProps) };
const NumberFormatTextFieldPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const NumberFormatTextFieldStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const NumberFormatTextFieldPropObj = {
  props: NumberFormatTextFieldProps,
  stateProps: NumberFormatTextFieldStateProps,
  propsNotForComponent: NumberFormatTextFieldPropsNotForComponent,
  statefulPropsNotForComponent: NumberFormatTextFieldStatePropsNotForComponent
}

export { NumberFormatTextFieldPropObj }

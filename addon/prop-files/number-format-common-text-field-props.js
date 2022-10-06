const props = {
  customInput: undefined,
  value: undefined,
  defaultValue: undefined,
  displayType: undefined,
  getInputRef: undefined,
  isAllowed: undefined,
  valueIsNumericString: undefined,
  onValueChange: undefined,
  renderText: undefined,
  type: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  value: undefined
}

const statefulPropsNotForComponent = {
}

const NumberFormatCommonTextFieldProps = () => { return Object.assign({}, props) };
const NumberFormatCommonTextFieldStateProps = () => {return Object.assign({}, stateProps) };
const NumberFormatCommonTextFieldPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const NumberFormatCommonTextFieldStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const NumberFormatCommonTextFieldPropObj = {
  props: NumberFormatCommonTextFieldProps,
  stateProps: NumberFormatCommonTextFieldStateProps,
  propsNotForComponent: NumberFormatCommonTextFieldPropsNotForComponent,
  statefulPropsNotForComponent: NumberFormatCommonTextFieldStatePropsNotForComponent
}

export { NumberFormatCommonTextFieldPropObj }

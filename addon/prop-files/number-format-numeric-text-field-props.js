import { NumberFormatCommonTextFieldPropObj } from './number-format-common-text-field-props';

const props = {
  allowLeadingZeros: undefined,
  allowNegative: undefined,
  allowedDecimalSeparators: undefined,
  thousandSeparator: undefined,
  decimalScale: undefined,
  fixedDecimalScale: undefined,
  decimalSeparator: undefined,
  prefix: undefined,
  suffix: undefined,
  thousandsGroupStyle: undefined,
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const NumberFormatNumericTextFieldProps = () => { return Object.assign({}, NumberFormatCommonTextFieldPropObj.props(), props) };
const NumberFormatNumericTextFieldStateProps = () => {return Object.assign({}, NumberFormatCommonTextFieldPropObj.stateProps(), stateProps) };
const NumberFormatNumericTextFieldPropsNotForComponent = () => {return Object.assign({}, NumberFormatCommonTextFieldPropObj.propsNotForComponent(), propsNotForComponent)};
const NumberFormatNumericTextFieldStatePropsNotForComponent = () => {return Object.assign({}, NumberFormatCommonTextFieldPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const NumberFormatNumericTextFieldPropObj = {
  props: NumberFormatNumericTextFieldProps,
  stateProps: NumberFormatNumericTextFieldStateProps,
  propsNotForComponent: NumberFormatNumericTextFieldPropsNotForComponent,
  statefulPropsNotForComponent: NumberFormatNumericTextFieldStatePropsNotForComponent
}

export { NumberFormatNumericTextFieldPropObj }

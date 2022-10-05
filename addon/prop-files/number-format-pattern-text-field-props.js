import { NumberFormatCommonTextFieldPropObj } from './number-format-common-text-field-props';

const props = {
  allowEmptyFormatting: undefined,
  format: undefined,
  mask: undefined,
  patternChar: undefined,
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const NumberFormatPatternTextFieldProps = () => { return Object.assign({}, NumberFormatCommonTextFieldPropObj.props(), props) };
const NumberFormatPatternTextFieldStateProps = () => {return Object.assign({}, NumberFormatCommonTextFieldPropObj.stateProps(), stateProps) };
const NumberFormatPatternTextFieldPropsNotForComponent = () => {return Object.assign({}, NumberFormatCommonTextFieldPropObj.propsNotForComponent(), propsNotForComponent)};
const NumberFormatPatternTextFieldStatePropsNotForComponent = () => {return Object.assign({}, NumberFormatCommonTextFieldPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const NumberFormatPatternTextFieldPropObj = {
  props: NumberFormatPatternTextFieldProps,
  stateProps: NumberFormatPatternTextFieldStateProps,
  propsNotForComponent: NumberFormatPatternTextFieldPropsNotForComponent,
  statefulPropsNotForComponent: NumberFormatPatternTextFieldStatePropsNotForComponent
}

export { NumberFormatPatternTextFieldPropObj }

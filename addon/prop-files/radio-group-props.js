import { FormGroupPropObj } from './form-group-props';

const props = {
  children: undefined,
  defaultValue: undefined,
  name: undefined,
  onChange: undefined,
  value: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
  children: undefined
}

const RadioGroupProps = () => { return Object.assign({}, FormGroupPropObj.props(), props) };
const RadioGroupStateProps = () => {return Object.assign({}, FormGroupPropObj.stateProps(), stateProps) };
const RadioGroupPropsNotForComponent = () => {return Object.assign({}, FormGroupPropObj.propsNotForComponent(), propsNotForComponent)};
const RadioGroupStatePropsNotForComponent = () => {return Object.assign({}, FormGroupPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const RadioGroupPropObj = {
  props: RadioGroupProps,
  stateProps: RadioGroupStateProps,
  propsNotForComponent: RadioGroupPropsNotForComponent,
  statefulPropsNotForComponent: RadioGroupStatePropsNotForComponent
}

export { RadioGroupPropObj }

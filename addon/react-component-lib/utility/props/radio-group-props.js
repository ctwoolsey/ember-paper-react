import { FormGroupPropObj } from './form-group-props';

const props = {
  children: null,
  defaultValue: null,
  name: null,
  onChange: null,
  value: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
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

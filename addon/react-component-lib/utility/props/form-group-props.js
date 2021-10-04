import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  row: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  row: null,
  sx: null
}

const statefulPropsNotForComponent = {
}

const FormGroupProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const FormGroupStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const FormGroupPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const FormGroupStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const FormGroupPropObj = {
  props: FormGroupProps,
  stateProps: FormGroupStateProps,
  propsNotForComponent: FormGroupPropsNotForComponent,
  statefulPropsNotForComponent: FormGroupStatePropsNotForComponent
}

export { FormGroupPropObj }

import { FormLabelPropObj} from "./form-label-props";

const props = {
  children: null,
  classes: null,
  color: null,
  disableAnimation: null,
  disabled: null,
  error: null,
  focused: null,
  margin: null,
  required: null,
  shrink: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  disabled: null,
  error: null,
  focused: null,
  margin: null,
  required: null,
  shrink: null,
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
}

const InputLabelProps = () => { return Object.assign({}, FormLabelPropObj.props(), props) };
const InputLabelStateProps = () => {return Object.assign({}, FormLabelPropObj.stateProps(), stateProps) };
const InputLabelPropsNotForComponent = () => {return Object.assign({}, FormLabelPropObj.propsNotForComponent(), propsNotForComponent)};
const InputLabelStatePropsNotForComponent = () => {return Object.assign({}, FormLabelPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const InputLabelPropObj = {
  props: InputLabelProps,
  stateProps: InputLabelStateProps,
  propsNotForComponent: InputLabelPropsNotForComponent,
  statefulPropsNotForComponent: InputLabelStatePropsNotForComponent
}

export { InputLabelPropObj }

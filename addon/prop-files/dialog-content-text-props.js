import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined,
}

const DialogContentTextProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const DialogContentTextStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const DialogContentTextPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const DialogContentTextStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DialogContentTextPropObj = {
  props: DialogContentTextProps,
  stateProps: DialogContentTextStateProps,
  propsNotForComponent: DialogContentTextPropsNotForComponent,
  statefulPropsNotForComponent: DialogContentTextStatePropsNotForComponent
}

export { DialogContentTextPropObj }

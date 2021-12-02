import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  dividers: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const DialogContentProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const DialogContentStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const DialogContentPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const DialogContentStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DialogContentPropObj = {
  props: DialogContentProps,
  stateProps: DialogContentStateProps,
  propsNotForComponent: DialogContentPropsNotForComponent,
  statefulPropsNotForComponent: DialogContentStatePropsNotForComponent
}

export { DialogContentPropObj }

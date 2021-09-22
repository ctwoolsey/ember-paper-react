import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  dividers: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
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

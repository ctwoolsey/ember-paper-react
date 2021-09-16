import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  dividers: null,
  sx: null,
  ref: null
};

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
}

const DialogContentProps = () => { return Object.assign({}, DivNativeProps(), props) };
const DialogContentStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const DialogContentPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { DialogContentProps, DialogContentStateProps, DialogContentPropsNotForComponent }

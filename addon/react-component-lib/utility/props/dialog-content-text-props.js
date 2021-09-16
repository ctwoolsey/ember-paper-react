import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  sx: null,
  ref: null
};

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
}

const DialogContentTextProps = () => { return Object.assign({}, DivNativeProps(), props) };
const DialogContentTextStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const DialogContentTextPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { DialogContentTextProps, DialogContentTextStateProps, DialogContentTextPropsNotForComponent }

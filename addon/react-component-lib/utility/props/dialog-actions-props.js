import { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  disableSpacing: null,
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

const DialogActionsProps = () => { return Object.assign({}, DivNativeProps(), props) };
const DialogActionsStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const DialogActionsPropsNotForComponent = () => {return Object.assign({}, DivNativeNotForComponent(), propsNotForComponent)};
const DialogActionsStatePropsNotForComponent = () => {return Object.assign({}, DivNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { DialogActionsProps, DialogActionsStateProps, DialogActionsPropsNotForComponent, DialogActionsStatePropsNotForComponent }

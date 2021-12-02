import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  disableSpacing: undefined,
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

const DialogActionsProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const DialogActionsStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const DialogActionsPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const DialogActionsStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DialogActionsPropObj = {
  props: DialogActionsProps,
  stateProps: DialogActionsStateProps,
  propsNotForComponent: DialogActionsPropsNotForComponent,
  statefulPropsNotForComponent: DialogActionsStatePropsNotForComponent
}

export { DialogActionsPropObj }

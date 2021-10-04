import { DivNativePropObj } from './native-global-props/div-native-props';

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
  children: null
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

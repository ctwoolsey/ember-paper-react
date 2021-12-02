import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  open: undefined,
  BackdropComponent: undefined,
  BackdropProps: undefined,
  classes: undefined,
  closeAfterTransition: undefined,
  component: undefined,
  components: undefined,
  componentsProps: undefined,
  container: undefined,
  disableAutoFocus: undefined,
  disableEnforceFocus: undefined,
  disableEscapeKeyDown: undefined,
  disablePortal: undefined,
  disableRestoreFocus: undefined,
  disableScrollLock: undefined,
  hideBackdrop: undefined,
  keepMounted: undefined,
  onBackdropClick: undefined,
  onClose: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  open: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const ModalProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const ModalStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const ModalPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const ModalStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const ModalPropObj = {
  props: ModalProps,
  stateProps: ModalStateProps,
  propsNotForComponent: ModalPropsNotForComponent,
  statefulPropsNotForComponent: ModalStatePropsNotForComponent
}

export { ModalPropObj }

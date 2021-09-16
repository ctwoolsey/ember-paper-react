import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  open: null,
  BackdropComponent: null,
  BackdropProps: null,
  classes: null,
  closeAfterTransition: null,
  component: null,
  components: null,
  componentsProps: null,
  container: null,
  disableAutoFocus: null,
  disableEnforceFocus: null,
  disableEscapeKeyDown: null,
  disablePortal: null,
  disableRestoreFocus: null,
  disableScrollLock: null,
  hideBackdrop: null,
  keepMounted: null,
  onBackdropClick: null,
  onClose: null,
  sx: null,
  ref: null
};

const stateProps = {
  open: null,
  sx: null
}

const statefulPropsNotForComponent = {
}

const ModalProps = () => { return Object.assign({}, DivNativeProps(), props) };
const ModalStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const ModalPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { ModalProps, ModalStateProps, ModalPropsNotForComponent }

import { DivNativePropObj } from './native-global-props/div-native-props';

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

const propsNotForComponent = {
}

const stateProps = {
  open: null,
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
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

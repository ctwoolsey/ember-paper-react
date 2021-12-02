import { ModalPropObj } from './modal-props';
import { ChildrenHolderPropObj } from './native-global-props/children-holder-props';

const props = {
  open: undefined,
  ariaDescribedBy: undefined,
  ariaLabelledBy: undefined,
  BackdropComponent: undefined,
  children: undefined,
  classes: undefined,
  disableEscapeKeyDown: undefined,
  fullScreen: undefined,
  fullWidth: undefined,
  maxWidth: undefined,
  onBackdropClick: undefined,
  onClose: undefined,
  PaperComponent: undefined,
  PaperProps: undefined,
  scroll: undefined,
  sx: undefined,
  TransitionComponent: undefined,
  transitionDuration: undefined,
  TransitionProps: undefined,
  ref: undefined
};

const propsNotForComponent = {
  keepOpenOnClickOutside: undefined
}

const stateProps = {
  children: undefined,
  open: undefined,
  fullScreen: undefined,
  fullWidth: undefined,
  maxWidth: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
}

const DialogProps = () => { return Object.assign({}, ChildrenHolderPropObj.props(), ModalPropObj.props(), props) };
const DialogStateProps = () => {return Object.assign({}, ChildrenHolderPropObj.stateProps(), ModalPropObj.stateProps(), stateProps) };
const DialogPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropObj.propsNotForComponent(), ModalPropObj.propsNotForComponent(), propsNotForComponent)};
const DialogStatePropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropObj.statefulPropsNotForComponent(), ModalPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DialogPropObj = {
  props: DialogProps,
  stateProps: DialogStateProps,
  propsNotForComponent: DialogPropsNotForComponent,
  statefulPropsNotForComponent: DialogStatePropsNotForComponent
}

export { DialogPropObj }

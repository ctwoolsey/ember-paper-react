import { ModalPropObj } from './modal-props';
import { ChildrenHolderPropObj } from './native-global-props/children-holder-props';

const props = {
  open: null,
  ariaDescribedBy: null,
  ariaLabelledBy: null,
  BackdropComponent: null,
  children: null,
  classes: null,
  disableEscapeKeyDown: null,
  fullScreen: null,
  fullWidth: null,
  maxWidth: null,
  onBackdropClick: null,
  onClose: null,
  PaperComponent: null,
  PaperProps: null,
  scroll: null,
  sx: null,
  TransitionComponent: null,
  transitionDuration: null,
  TransitionProps: null,
  ref: null
};

const propsNotForComponent = {
  keepOpenOnClickOutside: null
}

const stateProps = {
  children: null,
  open: null,
  fullScreen: null,
  fullWidth: null,
  maxWidth: null,
  sx: null
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

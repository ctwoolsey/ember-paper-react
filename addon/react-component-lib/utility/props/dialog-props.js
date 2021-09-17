import { ModalProps, ModalStateProps, ModalPropsNotForComponent, ModalStatePropsNotForComponent } from './modal-props';
import { ChildrenHolderProps, ChildrenHolderStateProps, ChildrenHolderPropsNotForComponent, ChildrenHolderStatePropsNotForComponent } from './native-global-props/children-holder-props';

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
}

const stateProps = {
  open: null,
  fullScreen: null,
  fullWidth: null,
  maxWidth: null,
  sx: null
}

const statefulPropsNotForComponent = {
}

const DialogProps = () => { return Object.assign({}, ChildrenHolderProps(), ModalProps(), props) };
const DialogStateProps = () => {return Object.assign({}, ChildrenHolderStateProps(), ModalStateProps(), stateProps) };
const DialogPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropsNotForComponent(), ModalPropsNotForComponent(), propsNotForComponent)};
const DialogStatePropsNotForComponent = () => {return Object.assign({}, ChildrenHolderStatePropsNotForComponent(), ModalStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { DialogProps, DialogStateProps, DialogPropsNotForComponent, DialogStatePropsNotForComponent }

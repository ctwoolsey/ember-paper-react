import { ModalProps, ModalStateProps, ModalPropsNotForComponent, ModalStatePropsNotForComponent } from './modal-props';

const props = {
  open: null,
  action: null,
  anchorEl: null,
  anchorOrigin: null,
  anchorPosition: null,
  anchorReference: null,
  children: null,
  classes: null,
  container: null,
  elevation: null,
  marginThreshold: null,
  onClose: null,
  PaperProps: null,
  sx: null,
  transformOrigin: null,
  TransitionComponent: null,
  transitionDuration: null,
  TransitionProps: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  open: null,
  anchorOrigin: null,
  anchorPosition: null,
  elevation: null,
  sx: null,
  transformOrigin: null,
  TransitionComponent: null,
  transitionDuration: null
}

const statefulPropsNotForComponent = {
}

const PopoverProps = () => { return Object.assign({}, ModalProps(), props) };
const PopoverStateProps = () => {return Object.assign({}, ModalStateProps(), stateProps) };
const PopoverPropsNotForComponent = () => {return Object.assign({}, ModalPropsNotForComponent(), propsNotForComponent)};
const PopoverStatePropsNotForComponent = () => {return Object.assign({}, ModalStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { PopoverProps, PopoverStateProps, PopoverPropsNotForComponent, PopoverStatePropsNotForComponent }

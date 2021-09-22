import { ModalPropObj } from './modal-props';

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

const PopoverProps = () => { return Object.assign({}, ModalPropObj.props(), props) };
const PopoverStateProps = () => {return Object.assign({}, ModalPropObj.stateProps(), stateProps) };
const PopoverPropsNotForComponent = () => {return Object.assign({}, ModalPropObj.propsNotForComponent(), propsNotForComponent)};
const PopoverStatePropsNotForComponent = () => {return Object.assign({}, ModalPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const PopoverPropObj = {
  props: PopoverProps,
  stateProps: PopoverStateProps,
  propsNotForComponent: PopoverPropsNotForComponent,
  statefulPropsNotForComponent: PopoverStatePropsNotForComponent
}

export { PopoverPropObj }

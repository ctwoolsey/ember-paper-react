import { ModalPropObj } from './modal-props';

const props = {
  open: undefined,
  action: undefined,
  anchorEl: undefined,
  anchorOrigin: undefined,
  anchorPosition: undefined,
  anchorReference: undefined,
  children: undefined,
  classes: undefined,
  container: undefined,
  elevation: undefined,
  marginThreshold: undefined,
  onClose: undefined,
  PaperProps: undefined,
  sx: undefined,
  transformOrigin: undefined,
  TransitionComponent: undefined,
  transitionDuration: undefined,
  TransitionProps: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  open: undefined,
  anchorOrigin: undefined,
  anchorPosition: undefined,
  elevation: undefined,
  sx: undefined,
  transformOrigin: undefined,
  TransitionComponent: undefined,
  transitionDuration: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
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

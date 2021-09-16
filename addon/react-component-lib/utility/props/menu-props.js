import { PopoverProps, PopoverStateProps, PopoverPropsNotForComponent } from './popover-props';
import { ChildrenHolderProps, ChildrenHolderStateProps, ChildrenHolderPropsNotForComponent } from './native-global-props/children-holder-props';

const props = {
  open: null,
  anchorEl: null,
  autoFocus: null,
  children: null,
  classes: null,
  disableAutoFocusItem: null,
  MenuListProps: null,
  onClose: null,
  PopoverClasses: null,
  sx: null,
  transitionDuration: null,
  TransitionProps: null,
  variant: null,
  ref: null
};

const stateProps = {
  open: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const MenuPropsProps = () => { return Object.assign({}, ChildrenHolderProps(), PopoverProps(), props) };
const MenuPropsStateProps = () => {return Object.assign({}, ChildrenHolderStateProps(), PopoverStateProps(), stateProps) };
const MenuPropsPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropsNotForComponent(), PopoverPropsNotForComponent(), statefulPropsNotForComponent)};

export { MenuPropsProps, MenuPropsStateProps, MenuPropsPropsNotForComponent }

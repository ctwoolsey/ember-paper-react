import { PopoverProps, PopoverStateProps, PopoverPropsNotForComponent, PopoverStatePropsNotForComponent } from './popover-props';
import { ChildrenHolderProps, ChildrenHolderStateProps, ChildrenHolderPropsNotForComponent, ChildrenHolderStatePropsNotForComponent } from './native-global-props/children-holder-props';

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

const propsNotForComponent = {
}

const stateProps = {
  open: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const MenuPropsProps = () => { return Object.assign({}, ChildrenHolderProps(), PopoverProps(), props) };
const MenuPropsStateProps = () => {return Object.assign({}, ChildrenHolderStateProps(), PopoverStateProps(), stateProps) };
const MenuPropsPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropsNotForComponent(), PopoverPropsNotForComponent(), propsNotForComponent)};
const MenuPropsStatePropsNotForComponent = () => {return Object.assign({}, ChildrenHolderStatePropsNotForComponent(), PopoverStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { MenuPropsProps, MenuPropsStateProps, MenuPropsPropsNotForComponent, MenuPropsStatePropsNotForComponent }

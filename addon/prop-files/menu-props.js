import { PopoverPropObj } from './popover-props';
import { ChildrenHolderPropObj } from './native-global-props/children-holder-props';

const props = {
  open: undefined,
  anchorEl: undefined,
  autoFocus: undefined,
  children: undefined,
  classes: undefined,
  disableAutoFocusItem: undefined,
  MenuListProps: undefined,
  onClose: undefined,
  PopoverClasses: undefined,
  sx: undefined,
  transitionDuration: undefined,
  TransitionProps: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  open: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const MenuProps = () => { return Object.assign({}, ChildrenHolderPropObj.props(), PopoverPropObj.props(), props) };
const MenuStateProps = () => {return Object.assign({}, ChildrenHolderPropObj.stateProps(), PopoverPropObj.stateProps(), stateProps) };
const MenuPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropObj.propsNotForComponent(), PopoverPropObj.propsNotForComponent(), propsNotForComponent)};
const MenuStatePropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropObj.statefulPropsNotForComponent(), PopoverPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const MenuPropObj = {
  props: MenuProps,
  stateProps: MenuStateProps,
  propsNotForComponent: MenuPropsNotForComponent,
  statefulPropsNotForComponent: MenuStatePropsNotForComponent
}

export { MenuPropObj }

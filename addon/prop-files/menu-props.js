import { PopoverPropObj } from './popover-props';
import { ChildrenHolderPropObj } from './native-global-props/children-holder-props';

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
  children: null
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

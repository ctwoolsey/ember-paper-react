import { ButtonBasePropObj } from './button-base-props';

const props = {
  autoFocus: undefined,
  children: undefined,
  classes: undefined,
  component: undefined,
  dense: undefined,
  disableGutters: undefined,
  divider: undefined,
  focusVisibleClassName: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const MenuItemProps = () => { return Object.assign({}, ButtonBasePropObj.props(), props) };
const MenuItemStateProps = () => {return Object.assign({}, ButtonBasePropObj.stateProps(), stateProps) };
const MenuItemPropsNotForComponent = () => {return Object.assign({}, ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const MenuItemStatePropsNotForComponent = () => {return Object.assign({}, ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const MenuItemPropObj = {
  props: MenuItemProps,
  stateProps: MenuItemStateProps,
  propsNotForComponent: MenuItemPropsNotForComponent,
  statefulPropsNotForComponent: MenuItemStatePropsNotForComponent
}

export { MenuItemPropObj }

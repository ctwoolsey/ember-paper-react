import { ButtonBasePropObj } from './button-base-props';

const props = {
  autoFocus: null,
  children: null,
  classes: null,
  component: null,
  dense: null,
  disableGutters: null,
  divider: null,
  focusVisibleClassName: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
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

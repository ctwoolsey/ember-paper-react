import { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent } from './button-base-props';

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

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
}

const MenuItemProps = () => { return Object.assign({}, ButtonBaseProps(), props) };
const MenuItemStateProps = () => {return Object.assign({}, ButtonBaseStateProps(), stateProps) };
const MenuItemPropsNotForComponent = () => {return Object.assign({}, ButtonBasePropsNotForComponent(), statefulPropsNotForComponent)};

export { MenuItemProps, MenuItemStateProps, MenuItemPropsNotForComponent }

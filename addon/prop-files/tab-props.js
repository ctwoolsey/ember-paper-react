import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  classes: undefined,
  disabled: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  icon: undefined,
  iconPosition: undefined,
  label: undefined,
  sx: undefined,
  value: undefined,
  wrapped: undefined,
  ref: undefined
};

const propsNotForComponent = {
  href: undefined
}

const stateProps = {
  disabled: undefined,
  disableFocusRipple: undefined,
  disableRipple: undefined,
  sx: undefined,
  value: undefined
}

const statefulPropsNotForComponent = {
}

let ButtonChildrenRemovedProps = () => {
  let props = ButtonBasePropObj.props();
  delete props.children;
  return props;
}


let ButtonChildrenRemovedStateNotForComponentProps = () => {
  let props = ButtonBasePropObj.statefulPropsNotForComponent();
  delete props.children;
  return props;
}


const TabProps = () => { return Object.assign({}, ThemePropObj.props(), ButtonChildrenRemovedProps(), props) };
const TabStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), ButtonBasePropObj.stateProps(), stateProps) };
const TabPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const TabStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), ButtonChildrenRemovedStateNotForComponentProps(), statefulPropsNotForComponent)};

const TabPropObj = {
  props: TabProps,
  stateProps: TabStateProps,
  propsNotForComponent: TabPropsNotForComponent,
  statefulPropsNotForComponent: TabStatePropsNotForComponent
}

export { TabPropObj }

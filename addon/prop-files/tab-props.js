import { ThemePropObj } from './theme-props';
import { ButtonBasePropObj } from './button-base-props';

const props = {
  classes: null,
  disabled: null,
  disableFocusRipple: null,
  disableRipple: null,
  icon: null,
  iconPosition: null,
  label: null,
  sx: null,
  value: null,
  wrapped: null,
  ref: null
};

const propsNotForComponent = {
  href: null
}

const stateProps = {
  disabled: null,
  disableFocusRipple: null,
  disableRipple: null,
  sx: null,
  value: null
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

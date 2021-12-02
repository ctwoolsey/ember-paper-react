import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  action: undefined,
  allowScrollButtonsMobile: undefined,
  centered: undefined,
  children: undefined,
  classes: undefined,
  component: undefined,
  indicatorColor: undefined,
  onChange: undefined,
  orientation: undefined,
  ScrollButtonComponent: undefined,
  scrollButtons: undefined,
  selectionFollowsFocus: undefined,
  sx: undefined,
  TabIndicatorProps: undefined,
  TabScrollButtonProps: undefined,
  textColor: undefined,
  value: undefined,
  variant: undefined,
  visibleScrollbar: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  allowScrollButtonsMobile: undefined,
  centered: undefined,
  indicatorColor: undefined,
  orientation: undefined,
  sx: undefined,
  textColor: undefined,
  value: undefined,
  variant: undefined,
  visibleScrollbar: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const TabsProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const TabsStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const TabsPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const TabsStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const TabsPropObj = {
  props: TabsProps,
  stateProps: TabsStateProps,
  propsNotForComponent: TabsPropsNotForComponent,
  statefulPropsNotForComponent: TabsStatePropsNotForComponent
}

export { TabsPropObj }

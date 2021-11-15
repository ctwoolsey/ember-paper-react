import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  action: null,
  allowScrollButtonsMobile: null,
  centered: null,
  children: null,
  classes: null,
  component: null,
  indicatorColor: null,
  onChange: null,
  orientation: null,
  ScrollButtonComponent: null,
  scrollButtons: null,
  selectionFollowsFocus: null,
  sx: null,
  TabIndicatorProps: null,
  TabScrollButtonProps: null,
  textColor: null,
  value: null,
  variant: null,
  visibleScrollbar: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  allowScrollButtonsMobile: null,
  centered: null,
  indicatorColor: null,
  orientation: null,
  sx: null,
  textColor: null,
  value: null,
  variant: null,
  visibleScrollbar: null
}

const statefulPropsNotForComponent = {
  children: null
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

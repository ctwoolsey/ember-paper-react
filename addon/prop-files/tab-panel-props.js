import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  value: undefined,
  index: undefined,
  children: undefined,
  classes: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
  value: undefined,
  children: undefined
}

const TabPanelProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const TabPanelStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const TabPanelPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const TabPanelStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const TabPanelPropObj = {
  props: TabPanelProps,
  stateProps: TabPanelStateProps,
  propsNotForComponent: TabPanelPropsNotForComponent,
  statefulPropsNotForComponent: TabPanelStatePropsNotForComponent
}

export { TabPanelPropObj }

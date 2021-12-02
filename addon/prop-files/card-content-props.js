import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  component: undefined,
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

const CardContentProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const CardContentStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const CardContentPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const CardContentStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CardContentPropObj = {
  props: CardContentProps,
  stateProps: CardContentStateProps,
  propsNotForComponent: CardContentPropsNotForComponent,
  statefulPropsNotForComponent: CardContentStatePropsNotForComponent
}

export { CardContentPropObj }

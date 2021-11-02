import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  component: null,
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

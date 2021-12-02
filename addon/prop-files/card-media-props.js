import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  component: undefined,
  image: undefined,
  src: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  image: undefined,
  src: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const CardMediaProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const CardMediaStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const CardMediaPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const CardMediaStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CardMediaPropObj = {
  props: CardMediaProps,
  stateProps: CardMediaStateProps,
  propsNotForComponent: CardMediaPropsNotForComponent,
  statefulPropsNotForComponent: CardMediaStatePropsNotForComponent
}

export { CardMediaPropObj }

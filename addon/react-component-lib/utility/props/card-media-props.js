import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  component: null,
  image: null,
  src: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  image: null,
  src: null,
  sx: null
}

const statefulPropsNotForComponent = {
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

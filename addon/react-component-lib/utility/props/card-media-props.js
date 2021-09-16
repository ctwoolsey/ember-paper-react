import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  component: null,
  image: null,
  src: null,
  sx: null,
  ref: null
};

const stateProps = {
  image: null,
  src: null,
  sx: null
}

const statefulPropsNotForComponent = {
}

const CardMediaProps = () => { return Object.assign({}, DivNativeProps(), props) };
const CardMediaStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const CardMediaPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { CardMediaProps, CardMediaStateProps, CardMediaPropsNotForComponent }

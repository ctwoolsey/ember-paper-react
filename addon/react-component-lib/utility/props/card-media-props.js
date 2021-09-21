import { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent } from './native-global-props/div-native-props';

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

const CardMediaProps = () => { return Object.assign({}, DivNativeProps(), props) };
const CardMediaStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const CardMediaPropsNotForComponent = () => {return Object.assign({}, DivNativeNotForComponent(), propsNotForComponent)};
const CardMediaStatePropsNotForComponent = () => {return Object.assign({}, DivNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { CardMediaProps, CardMediaStateProps, CardMediaPropsNotForComponent, CardMediaStatePropsNotForComponent }

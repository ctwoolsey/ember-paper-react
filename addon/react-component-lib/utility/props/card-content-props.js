import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

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
}

const CardContentProps = () => { return Object.assign({}, DivNativeProps(), props) };
const CardContentStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const CardContentPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const CardContentStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { CardContentProps, CardContentStateProps, CardContentPropsNotForComponent, CardContentStatePropsNotForComponent }

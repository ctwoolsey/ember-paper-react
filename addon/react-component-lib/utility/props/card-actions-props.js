import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  sx: null,
  ref: null
};

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
}

const CardActionProps = () => { return Object.assign({}, DivNativeProps(), props) };
const CardActionStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const CardActionPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { CardActionProps, CardActionStateProps, CardActionPropsNotForComponent }

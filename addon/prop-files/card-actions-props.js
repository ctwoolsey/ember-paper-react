import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
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

const CardActionProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const CardActionStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const CardActionPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const CardActionStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CardActionPropObj = {
  props: CardActionProps,
  stateProps: CardActionStateProps,
  propsNotForComponent: CardActionPropsNotForComponent,
  statefulPropsNotForComponent: CardActionStatePropsNotForComponent
}

export { CardActionPropObj }

import { ButtonBasePropObj } from './button-base-props';

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

const CardActionAreaProps = () => { return Object.assign({}, ButtonBasePropObj.props(), props) };
const CardActionAreaStateProps = () => {return Object.assign({}, ButtonBasePropObj.stateProps(), stateProps) };
const CardActionAreaPropsNotForComponent = () => {return Object.assign({}, ButtonBasePropObj.propsNotForComponent(), propsNotForComponent)};
const CardActionAreaStatePropsNotForComponent = () => {return Object.assign({}, ButtonBasePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CardActionAreaPropObj = {
  props: CardActionAreaProps,
  stateProps: CardActionAreaStateProps,
  propsNotForComponent: CardActionAreaPropsNotForComponent,
  statefulPropsNotForComponent: CardActionAreaStatePropsNotForComponent
}

export { CardActionAreaPropObj }

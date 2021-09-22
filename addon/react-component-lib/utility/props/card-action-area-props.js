import { ButtonBasePropObj } from './button-base-props';

const props = {
  children: null,
  classes: null,
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

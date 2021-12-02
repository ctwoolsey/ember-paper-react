import { PaperPropObj } from './paper-props';

const props = {
  children: undefined,
  classes: undefined,
  raised: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  raised: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const CardProps = () => { return Object.assign({}, PaperPropObj.props(), props) };
const CardStateProps = () => {return Object.assign({}, PaperPropObj.stateProps(), stateProps) };
const CardPropsNotForComponent = () => {return Object.assign({}, PaperPropObj.propsNotForComponent(), propsNotForComponent)};
const CardStatePropsNotForComponent = () => {return Object.assign({}, PaperPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CardPropObj = {
  props: CardProps,
  stateProps: CardStateProps,
  propsNotForComponent: CardPropsNotForComponent,
  statefulPropsNotForComponent: CardStatePropsNotForComponent
}

export { CardPropObj }

import { PaperPropObj } from './paper-props';

const props = {
  children: null,
  classes: null,
  raised: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  raised: null,
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
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

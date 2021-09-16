import { PaperProps, PaperStateProps, PaperPropsNotForComponent } from './paper-props';

const props = {
  children: null,
  classes: null,
  raised: null,
  sx: null,
  ref: null
};

const stateProps = {
  raised: null,
  sx: null
}

const statefulPropsNotForComponent = {
}

const CardProps = () => { return Object.assign({}, PaperProps(), props) };
const CardStateProps = () => {return Object.assign({}, PaperStateProps(), stateProps) };
const CardPropsNotForComponent = () => {return Object.assign({}, PaperPropsNotForComponent(), statefulPropsNotForComponent)};

export { CardProps, CardStateProps, CardPropsNotForComponent }

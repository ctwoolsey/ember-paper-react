import { PaperProps, PaperStateProps, PaperPropsNotForComponent, PaperStatePropsNotForComponent } from './paper-props';

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
}

const CardProps = () => { return Object.assign({}, PaperProps(), props) };
const CardStateProps = () => {return Object.assign({}, PaperStateProps(), stateProps) };
const CardPropsNotForComponent = () => {return Object.assign({}, PaperPropsNotForComponent(), propsNotForComponent)};
const CardStatePropsNotForComponent = () => {return Object.assign({}, PaperStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { CardProps, CardStateProps, CardPropsNotForComponent, CardStatePropsNotForComponent }

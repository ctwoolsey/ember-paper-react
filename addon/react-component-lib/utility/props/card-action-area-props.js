import { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent } from './button-base-props';

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

const CardActionAreaProps = () => { return Object.assign({}, ButtonBaseProps(), props) };
const CardActionAreaStateProps = () => {return Object.assign({}, ButtonBaseStateProps(), stateProps) };
const CardActionAreaPropsNotForComponent = () => {return Object.assign({}, ButtonBasePropsNotForComponent(), statefulPropsNotForComponent)};

export { CardActionAreaProps, CardActionAreaStateProps, CardActionAreaPropsNotForComponent }

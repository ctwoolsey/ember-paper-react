import { ButtonBaseProps, ButtonBaseStateProps, ButtonBasePropsNotForComponent, ButtonBaseStatePropsNotForComponent } from './button-base-props';

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

const CardActionAreaProps = () => { return Object.assign({}, ButtonBaseProps(), props) };
const CardActionAreaStateProps = () => {return Object.assign({}, ButtonBaseStateProps(), stateProps) };
const CardActionAreaPropsNotForComponent = () => {return Object.assign({}, ButtonBasePropsNotForComponent(), propsNotForComponent)};
const CardActionAreaStatePropsNotForComponent = () => {return Object.assign({}, ButtonBaseStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { CardActionAreaProps, CardActionAreaStateProps, CardActionAreaPropsNotForComponent, CardActionAreaStatePropsNotForComponent }

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

const propsNotForComponent = {
}

const statefulPropsNotForComponent = {
}

const DialogTitleProps = () => { return Object.assign({}, DivNativeProps(), props) };
const DialogTitleStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const DialogTitlePropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const DialogTitleStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { DialogTitleProps, DialogTitleStateProps, DialogTitlePropsNotForComponent, DialogTitleStatePropsNotForComponent }

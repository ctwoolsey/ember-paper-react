import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  sx: undefined,
  ref: undefined
};

const stateProps = {
  sx: undefined
}

const propsNotForComponent = {
}

const statefulPropsNotForComponent = {
  children: undefined
}

const DialogTitleProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const DialogTitleStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const DialogTitlePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const DialogTitleStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DialogTitlePropObj = {
  props: DialogTitleProps,
  stateProps: DialogTitleStateProps,
  propsNotForComponent: DialogTitlePropsNotForComponent,
  statefulPropsNotForComponent: DialogTitleStatePropsNotForComponent
}

export { DialogTitlePropObj }

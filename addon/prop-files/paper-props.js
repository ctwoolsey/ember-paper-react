import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  component: undefined,
  elevation: undefined,
  square: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  elevation: undefined,
  square: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const PaperProps = () => {return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props)};
const PaperStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps)};
const PaperPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const PaperStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const PaperPropObj = {
  props: PaperProps,
  stateProps: PaperStateProps,
  propsNotForComponent: PaperPropsNotForComponent,
  statefulPropsNotForComponent: PaperStatePropsNotForComponent
}

export { PaperPropObj }

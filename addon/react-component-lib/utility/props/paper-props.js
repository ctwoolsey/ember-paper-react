import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  elevation: null,
  square: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
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

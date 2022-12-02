import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: undefined,
  classes: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const AlertTitleProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const AlertTitleStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const AlertTitlePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const AlertTitleStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const AlertTitlePropObj = {
  props: AlertTitleProps,
  stateProps: AlertTitleStateProps,
  propsNotForComponent: AlertTitlePropsNotForComponent,
  statefulPropsNotForComponent: AlertTitleStatePropsNotForComponent
}

export { AlertTitlePropObj }

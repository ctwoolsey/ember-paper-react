import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

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
  children: null
}

const BadgeProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const BadgeStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const BadgePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const BadgeStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const BadgePropObj = {
  props: BadgeProps,
  stateProps: BadgeStateProps,
  propsNotForComponent: BadgePropsNotForComponent,
  statefulPropsNotForComponent: BadgeStatePropsNotForComponent
}

export { BadgePropObj }

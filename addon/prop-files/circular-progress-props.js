import { ThemePropObj } from './theme-props';
import { SvgIconPropObj } from './svg-icon-props';

const props = {
  classes: undefined,
  color: undefined,
  disableShrink: undefined,
  size: undefined,
  sx: undefined,
  thickness: undefined,
  value: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  size: undefined,
  sx: undefined,
  thickness: undefined,
  value: undefined,
  variant: undefined,
}

const statefulPropsNotForComponent = {
  children: undefined
}

const CircularProgressProps = () => { return Object.assign({}, ThemePropObj.props(), SvgIconPropObj.props(), props)};
const CircularProgressStateProps = () => { return Object.assign({}, ThemePropObj.stateProps(), SvgIconPropObj.stateProps(), stateProps)};
const CircularProgressPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), SvgIconPropObj.propsNotForComponent(), propsNotForComponent)};
const CircularProgressStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), SvgIconPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CircularProgressPropObj = {
  props: CircularProgressProps,
  stateProps: CircularProgressStateProps,
  propsNotForComponent: CircularProgressPropsNotForComponent,
  statefulPropsNotForComponent: CircularProgressStatePropsNotForComponent
}

export { CircularProgressPropObj }

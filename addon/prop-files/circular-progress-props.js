import { ThemePropObj } from './theme-props';
import { SvgIconPropObj } from './svg-icon-props';

const props = {
  classes: null,
  color: null,
  disableShrink: null,
  size: null,
  sx: null,
  thickness: null,
  value: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  size: null,
  sx: null,
  thickness: null,
  value: null,
  variant: null,
}

const statefulPropsNotForComponent = {
  children: null
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

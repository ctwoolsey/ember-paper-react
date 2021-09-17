import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
import { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent, SvgIconStatePropsNotForComponent } from './svg-icon-props';

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
}

const CircularProgressProps = () => { return Object.assign({}, ThemeProps(), SvgIconProps(), props)};
const CircularProgressStateProps = () => { return Object.assign({}, ThemeStateProps(), SvgIconStateProps(), stateProps)};
const CircularProgressPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), SvgIconPropsNotForComponent(), propsNotForComponent)};
const CircularProgressStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), SvgIconStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { CircularProgressProps, CircularProgressStateProps, CircularProgressPropsNotForComponent, CircularProgressStatePropsNotForComponent }

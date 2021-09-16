import { ThemeProps, ThemePropsNotForComponent, ThemeStateProps } from "./theme-props";
import { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent } from "./svg-icon-props";

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
const CircularProgressPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), SvgIconPropsNotForComponent(), statefulPropsNotForComponent)};

export { CircularProgressProps, CircularProgressStateProps, CircularProgressPropsNotForComponent }

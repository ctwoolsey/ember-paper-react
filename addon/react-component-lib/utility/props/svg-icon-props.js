import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
import { GlobalSvgProps, GlobalSvgStateProps } from './native-global-props/global-svg-props';

const props = {
  children: null,
  classes: null,
  color: null,
  component: null,
  fontSize: null,
  htmlColor: null,
  shapeRendering: null,
  sx: null,
  titleAccess: null,
  viewBox: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  fontSize: null,
  htmlColor: null,
  sx: null,
  viewBox: null
}

const statefulPropsNotForComponent = {
}

const SvgIconProps = () => { return Object.assign({}, ThemeProps(), GlobalSvgProps(), props) };
const SvgIconStateProps = () => {return Object.assign({}, ThemeStateProps(), GlobalSvgStateProps(), stateProps)};
const SvgIconPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), propsNotForComponent)};
const SvgIconStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent, SvgIconStatePropsNotForComponent }

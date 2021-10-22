import { ThemePropObj } from './theme-props';
import { BadgeUnstyledPropObj } from "./badge-unstyled-props";

const props = {
  anchorOrigin: null,
  badgeContent: null,
  children: null,
  classes: null,
  color: null,
  component: null,
  components: null,
  componentsProps: null,
  invisible: null,
  max: null,
  overlap: null,
  showZero: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
  anchorOrigin: null,
  badgeContent: null,
  color: null,
  componentsProps: null,
  invisible: null,
  max: null,
  overlap: null,
  showZero: null,
  sx: null,
  variant: null
}

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
}

const BadgeProps = () => { return Object.assign({}, ThemePropObj.props(), BadgeUnstyledPropObj.props(), props) };
const BadgeStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), BadgeUnstyledPropObj.stateProps(), stateProps) };
const BadgePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), BadgeUnstyledPropObj.propsNotForComponent(), propsNotForComponent)};
const BadgeStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), BadgeUnstyledPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const BadgePropObj = {
  props: BadgeProps,
  stateProps: BadgeStateProps,
  propsNotForComponent: BadgePropsNotForComponent,
  statefulPropsNotForComponent: BadgeStatePropsNotForComponent
}

export { BadgePropObj }

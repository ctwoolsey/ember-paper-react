import { ThemePropObj } from './theme-props';
import { BadgeUnstyledPropObj } from "./badge-unstyled-props";

const props = {
  anchorOrigin: undefined,
  badgeContent: undefined,
  children: undefined,
  classes: undefined,
  color: undefined,
  component: undefined,
  components: undefined,
  componentsProps: undefined,
  invisible: undefined,
  max: undefined,
  overlap: undefined,
  showZero: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
  anchorOrigin: undefined,
  badgeContent: undefined,
  color: undefined,
  componentsProps: undefined,
  invisible: undefined,
  max: undefined,
  overlap: undefined,
  showZero: undefined,
  sx: undefined,
  variant: undefined
}

const stateProps = {
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
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

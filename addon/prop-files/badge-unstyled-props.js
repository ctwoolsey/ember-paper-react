import { SpanNativePropObj } from './native-global-props/span-native-props';

const props = {
  anchorOrigin: undefined,
  badgeContent: undefined,
  children: undefined,
  classes: undefined,
  component: undefined,
  components: undefined,
  componentsProps: undefined,
  invisible: undefined,
  max: undefined,
  overlap: undefined,
  showZero: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  anchorOrigin: undefined,
  badgeContent: undefined,
  componentsProps: undefined,
  invisible: undefined,
  max: undefined,
  overlap: undefined,
  showZero: undefined,
  variant: undefined,
}

const statefulPropsNotForComponent = {
  children: undefined
}

const BadgeUnstyledProps = () => { return Object.assign({}, SpanNativePropObj.props(), props) };
const BadgeUnstyledStateProps = () => {return Object.assign({}, SpanNativePropObj.stateProps(), stateProps) };
const BadgeUnstyledPropsNotForComponent = () => {return Object.assign({}, SpanNativePropObj.propsNotForComponent(), propsNotForComponent)};
const BadgeUnstyledStatePropsNotForComponent = () => {return Object.assign({}, SpanNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const BadgeUnstyledPropObj = {
  props: BadgeUnstyledProps,
  stateProps: BadgeUnstyledStateProps,
  propsNotForComponent: BadgeUnstyledPropsNotForComponent,
  statefulPropsNotForComponent: BadgeUnstyledStatePropsNotForComponent
}

export { BadgeUnstyledPropObj }

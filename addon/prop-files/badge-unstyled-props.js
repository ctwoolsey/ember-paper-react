import { SpanNativePropObj } from './native-global-props/span-native-props';

const props = {
  anchorOrigin: null,
  badgeContent: null,
  children: null,
  classes: null,
  component: null,
  components: null,
  componentsProps: null,
  invisible: null,
  max: null,
  overlap: null,
  showZero: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  anchorOrigin: null,
  badgeContent: null,
  componentsProps: null,
  invisible: null,
  max: null,
  overlap: null,
  showZero: null,
  variant: null,
}

const statefulPropsNotForComponent = {
  children: null
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

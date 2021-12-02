import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  action: undefined,
  avatar: undefined,
  classes: undefined,
  component: undefined,
  disableTypography: undefined,
  subheader: undefined,
  subheaderTypographyProps: undefined,
  sx: undefined,
  title: undefined,
  titleTypographyProps: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  action: undefined,
  avatar: undefined,
  disableTypography: undefined,
  subheader: undefined,
  subheaderTypographyProps: undefined,
  sx: undefined,
  title: undefined,
  titleTypographyProps: undefined
}

const statefulPropsNotForComponent = {
}

const CardHeaderProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const CardHeaderStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const CardHeaderPropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const CardHeaderStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const CardHeaderPropObj = {
  props: CardHeaderProps,
  stateProps: CardHeaderStateProps,
  propsNotForComponent: CardHeaderPropsNotForComponent,
  statefulPropsNotForComponent: CardHeaderStatePropsNotForComponent
}

export { CardHeaderPropObj }

import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  action: null,
  avatar: null,
  classes: null,
  component: null,
  disableTypography: null,
  subheader: null,
  subheaderTypographyProps: null,
  sx: null,
  title: null,
  titleTypographyProps: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  action: null,
  avatar: null,
  disableTypography: null,
  subheader: null,
  subheaderTypographyProps: null,
  sx: null,
  title: null,
  titleTypographyProps: null
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

import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

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

const CardHeaderProps = () => { return Object.assign({}, DivNativeProps(), props) };
const CardHeaderStateProps = () => {return Object.assign({}, DivNativeStateProps(), stateProps) };
const CardHeaderPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { CardHeaderProps, CardHeaderStateProps, CardHeaderPropsNotForComponent }
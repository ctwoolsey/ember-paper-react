import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';
import { PaperPropObj } from './paper-props';

const props = {
  action: undefined,
  children: undefined,
  classes: undefined,
  closeText: undefined,
  color: undefined,
  icon: undefined,
  iconMapping: undefined,
  onClose: undefined,
  role: undefined,
  severity: undefined,
  slotProps: undefined,
  slots: undefined,
  sx: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  action: undefined,
  closeText: undefined,
  color: undefined,
  icon: undefined,
  iconMapping: undefined,
  role: undefined,
  severity: undefined,
  slotProps: undefined,
  slots: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const AlertProps = () => { return Object.assign({}, PaperPropObj.props(), ThemePropObj.props(), DivNativePropObj.props(), props) };
const AlertStateProps = () => {return Object.assign({}, PaperPropObj.stateProps(), ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const AlertPropsNotForComponent = () => {return Object.assign({}, PaperPropObj.propsNotForComponent(), ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const AlertStatePropsNotForComponent = () => {return Object.assign({}, PaperPropObj.statefulPropsNotForComponent(), ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const AlertPropObj = {
  props: AlertProps,
  stateProps: AlertStateProps,
  propsNotForComponent: AlertPropsNotForComponent,
  statefulPropsNotForComponent: AlertStatePropsNotForComponent
}

export { AlertPropObj }

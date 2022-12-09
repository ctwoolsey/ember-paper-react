import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  onChange: undefined,
  renderInput: undefined,
  acceptRegex: undefined,
  ampm: undefined,
  ampmInClock: undefined,
  className: undefined,
  closeOnSelect: undefined,
  components: undefined,
  componentsProps: undefined,
  disabled: undefined,
  disableIgnoringDatePartForTimeValidation: undefined,
  disableMaskedInput: undefined,
  disableOpenPicker: undefined,
  displayStaticWrapperAs: undefined,
  getClockLabelText: undefined,
  getOpenDialogAriaText: undefined,
  InputAdornmentProps: undefined,
  inputFormat: undefined,
  inputRef: undefined,
  mask: undefined,
  maxTime: undefined,
  minTime: undefined,
  minutesStep: undefined,
  onAccept: undefined,
  onError: undefined,
  onViewChange: undefined,
  OpenPickerButtonProps: undefined,
  openTo: undefined,
  orientation: undefined,
  readOnly: undefined,
  rifmFormatter: undefined,
  shouldDisableTime: undefined,
  showToolbar: undefined,
  ToolbarComponent: undefined,
  toolbarTitle: undefined,
  value: undefined,
  views: undefined,
  ref: undefined,
};

const propsNotForComponent = {
}

const stateProps = {
  acceptRegex: undefined,
  ampm: undefined,
  ampmInClock: undefined,
  className: undefined,
  closeOnSelect: undefined,
  components: undefined,
  componentsProps: undefined,
  disabled: undefined,
  disableIgnoringDatePartForTimeValidation: undefined,
  disableMaskedInput: undefined,
  disableOpenPicker: undefined,
  displayStaticWrapperAs: undefined,
  mask: undefined,
  maxTime: undefined,
  minTime: undefined,
  minutesStep: undefined,
  OpenPickerButtonProps: undefined,
  openTo: undefined,
  orientation: undefined,
  readOnly: undefined,
  shouldDisableTime: undefined,
  showToolbar: undefined,
  toolbarTitle: undefined,
  value: undefined,
  views: undefined,
}

const statefulPropsNotForComponent = {
}

const StaticTimePickerProps = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const StaticTimePickerStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const StaticTimePickerPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const StaticTimePickerStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const StaticTimePickerPropObj = {
  props: StaticTimePickerProps,
  stateProps: StaticTimePickerStateProps,
  propsNotForComponent: StaticTimePickerPropsNotForComponent,
  statefulPropsNotForComponent: StaticTimePickerStatePropsNotForComponent
}

export { StaticTimePickerPropObj }

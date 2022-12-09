import { ThemePropObj } from './theme-props';

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
  desktopModeMediaQuery: undefined,
  DialogProps: undefined,
  disabled: undefined,
  disableIgnoringDatePartForTimeValidation: undefined,
  disableMaskedInput: undefined,
  disableOpenPicker: undefined,
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
  onClose: undefined,
  onError: undefined,
  onMonthChange: undefined,
  onOpen: undefined,
  onViewChange: undefined,
  open: undefined,
  OpenPickerButtonProps: undefined,
  openTo: undefined,
  orientation: undefined,
  PaperProps: undefined,
  PopperProps: undefined,
  readOnly: undefined,
  rifmFormatter: undefined,
  shouldDisableTime: undefined,
  showToolbar: undefined,
  ToolbarComponent: undefined,
  toolbarTitle: undefined,
  TransitionComponent: undefined,
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
  desktopModeMediaQuery: undefined,
  DialogProps: undefined,
  disabled: undefined,
  disableIgnoringDatePartForTimeValidation: undefined,
  disableMaskedInput: undefined,
  disableOpenPicker: undefined,
  mask: undefined,
  maxTime: undefined,
  minTime: undefined,
  minutesStep: undefined,
  open: undefined,
  OpenPickerButtonProps: undefined,
  openTo: undefined,
  orientation: undefined,
  PaperProps: undefined,
  PopperProps: undefined,
  readOnly: undefined,
  shouldDisableTime: undefined,
  showToolbar: undefined,
  toolbarTitle: undefined,
  value: undefined,
  views: undefined,
}

const statefulPropsNotForComponent = {
}

const TimePickerProps = () => { return Object.assign({}, ThemePropObj.props(), props) };
const TimePickerStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), stateProps) };
const TimePickerPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), propsNotForComponent)};
const TimePickerStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const TimePickerPropObj = {
  props: TimePickerProps,
  stateProps: TimePickerStateProps,
  propsNotForComponent: TimePickerPropsNotForComponent,
  statefulPropsNotForComponent: TimePickerStatePropsNotForComponent
}

export { TimePickerPropObj }

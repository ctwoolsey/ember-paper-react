import { ThemePropObj } from './theme-props';

const props = {
  onChange: undefined,
  renderInput: undefined,
  acceptRegex: undefined,
  className: undefined,
  closeOnSelect: undefined,
  components: undefined,
  componentsProps: undefined,
  dayOfWeekFormatter: undefined,
  defaultCalendarMonth: undefined,
  desktopModeMediaQuery: undefined,
  DialogProps: undefined,
  disabled: undefined,
  disableFuture: undefined,
  disableHighlightToday: undefined,
  disableMaskedInput: undefined,
  disableOpenPicker: undefined,
  disablePast: undefined,
  getOpenDialogAriaText: undefined,
  InputAdornmentProps: undefined,
  inputFormat: undefined,
  inputRef: undefined,
  loading: undefined,
  mask: undefined,
  maxDate: undefined,
  minDate: undefined,
  onAccept: undefined,
  onClose: undefined,
  onError: undefined,
  onMonthChange: undefined,
  onOpen: undefined,
  onViewChange: undefined,
  onYearChange: undefined,
  open: undefined,
  OpenPickerButtonProps: undefined,
  openTo: undefined,
  orientation: undefined,
  PaperProps: undefined,
  PopperProps: undefined,
  readOnly: undefined,
  reduceAnimations: undefined,
  renderDay: undefined,
  renderLoading: undefined,
  rifmFormatter: undefined,
  shouldDisableDate: undefined,
  shouldDisableMonth: undefined,
  shouldDisableYear: undefined,
  showDaysOutsideCurrentMonth: undefined,
  showToolbar: undefined,
  ToolbarComponent: undefined,
  toolbarFormat: undefined,
  toolbarPlaceholder: undefined,
  toolbarTitle: undefined,
  TransitionComponent: undefined,
  value: undefined,
  views: undefined,
};

const propsNotForComponent = {
}

const stateProps = {
  acceptRegex: undefined,
  className: undefined,
  closeOnSelect: undefined,
  components: undefined,
  componentsProps: undefined,
  defaultCalendarMonth: undefined,
  desktopModeMediaQuery: undefined,
  DialogProps: undefined,
  disabled: undefined,
  disableFuture: undefined,
  disableHighlightToday: undefined,
  disableMaskedInput: undefined,
  disableOpenPicker: undefined,
  disablePast: undefined,
  loading: undefined,
  mask: undefined,
  maxDate: undefined,
  minDate: undefined,
  open: undefined,
  OpenPickerButtonProps: undefined,
  openTo: undefined,
  orientation: undefined,
  PaperProps: undefined,
  PopperProps: undefined,
  readOnly: undefined,
  reduceAnimations: undefined,
  showDaysOutsideCurrentMonth: undefined,
  showToolbar: undefined,
  toolbarFormat: undefined,
  toolbarPlaceholder: undefined,
  toolbarTitle: undefined,
  value: undefined,
  views: undefined,
}

const statefulPropsNotForComponent = {
}

const DatePickerProps = () => { return Object.assign({}, ThemePropObj.props(), props) };
const DatePickerStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), stateProps) };
const DatePickerPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), propsNotForComponent)};
const DatePickerStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DatePickerPropObj = {
  props: DatePickerProps,
  stateProps: DatePickerStateProps,
  propsNotForComponent: DatePickerPropsNotForComponent,
  statefulPropsNotForComponent: DatePickerStatePropsNotForComponent
}

export { DatePickerPropObj }

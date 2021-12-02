import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  options: undefined,
  renderInput: undefined,
  autoComplete: undefined,
  autoHighlight: undefined,
  autoSelect: undefined,
  blurOnSelect: undefined,
  ChipProps: undefined,
  classes: undefined,
  clearIcon: undefined,
  clearOnBlur: undefined,
  clearOnEscape: undefined,
  clearText: undefined,
  closeText: undefined,
  componentsProps: undefined,
  defaultValue: undefined,
  disableClearable: undefined,
  disableCloseOnSelect: undefined,
  disabled: undefined,
  disabledItemsFocusable: undefined,
  disableListWrap: undefined,
  disablePortal: undefined,
  filterOptions: undefined,
  filterSelectedOptions: undefined,
  forcePopupIcon: undefined,
  freeSolo: undefined,
  fullWidth: undefined,
  getLimitTagsText: undefined,
  getOptionDisabled: undefined,
  getOptionLabel: undefined,
  groupBy: undefined,
  handleHomeEndKeys: undefined,
  id: undefined,
  includeInputInList: undefined,
  inputValue: undefined,
  isOptionEqualToValue: undefined,
  limitTags: undefined,
  ListboxComponent: undefined,
  ListboxProps: undefined,
  loading: undefined,
  loadingText: undefined,
  multiple: undefined,
  noOptionsText: undefined,
  onChange: undefined,
  onClose: undefined,
  onHighlightChange: undefined,
  onInputChange: undefined,
  onOpen: undefined,
  open: undefined,
  openOnFocus: undefined,
  openText: undefined,
  PaperComponent: undefined,
  PopperComponent: undefined,
  popupIcon: undefined,
  renderGroup: undefined,
  renderOption: undefined,
  renderTags: undefined,
  selectOnFocus: undefined,
  size: undefined,
  sx: undefined,
  value: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  options: undefined,
  ChipProps: undefined,
  clearIcon: undefined,
  clearText: undefined,
  closeText: undefined,
  componentsProps: undefined,
  defaultValue: undefined,
  disableClearable: undefined,
  disabled: undefined,
  disabledItemsFocusable: undefined,
  filterOptions: undefined,
  filterSelectedOptions: undefined,
  forcePopupIcon: undefined,
  getOptionDisabled: undefined,
  groupBy: undefined,
  inputValue: undefined,
  ListboxProps: undefined,
  loading: undefined,
  loadingText: undefined,
  noOptionsText: undefined,
  open: undefined,
  openText: undefined,
  popupIcon: undefined,
  size: undefined,
  sx: undefined,
  value: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const AutocompleteProps = () => { return Object.assign({}, DivNativePropObj.props(), props) };
const AutocompleteStateProps = () => {return Object.assign({}, DivNativePropObj.stateProps(), stateProps) };
const AutocompletePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const AutocompleteStatePropsNotForComponent = () => {return Object.assign({}, DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const AutocompletePropObj = {
  props: AutocompleteProps,
  stateProps: AutocompleteStateProps,
  propsNotForComponent: AutocompletePropsNotForComponent,
  statefulPropsNotForComponent: AutocompleteStatePropsNotForComponent
}

export { AutocompletePropObj }


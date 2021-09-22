import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  options: null,
  renderInput: null,
  autoComplete: null,
  autoHighlight: null,
  autoSelect: null,
  blurOnSelect: null,
  ChipProps: null,
  classes: null,
  clearIcon: null,
  clearOnBlur: null,
  clearOnEscape: null,
  clearText: null,
  closeText: null,
  componentsProps: null,
  defaultValue: null,
  disableClearable: null,
  disableCloseOnSelect: null,
  disabled: null,
  disabledItemsFocusable: null,
  disableListWrap: null,
  disablePortal: null,
  filterOptions: null,
  filterSelectedOptions: null,
  forcePopupIcon: null,
  freeSolo: null,
  fullWidth: null,
  getLimitTagsText: null,
  getOptionDisabled: null,
  getOptionLabel: null,
  groupBy: null,
  handleHomeEndKeys: null,
  id: null,
  includeInputInList: null,
  inputValue: null,
  isOptionEqualToValue: null,
  limitTags: null,
  ListboxComponent: null,
  ListboxProps: null,
  loading: null,
  loadingText: null,
  multiple: null,
  noOptionsText: null,
  onChange: null,
  onClose: null,
  onHighlightChange: null,
  onInputChange: null,
  onOpen: null,
  open: null,
  openOnFocus: null,
  openText: null,
  PaperComponent: null,
  PopperComponent: null,
  popupIcon: null,
  renderGroup: null,
  renderOption: null,
  renderTags: null,
  selectOnFocus: null,
  size: null,
  sx: null,
  value: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  options: null,
  ChipProps: null,
  clearText: null,
  closeText: null,
  componentsProps: null,
  defaultValue: null,
  disableClearable: null,
  disabled: null,
  disabledItemsFocusable: null,
  filterOptions: null,
  filterSelectedOptions: null,
  forcePopupIcon: null,
  getOptionDisabled: null,
  groupBy: null,
  inputValue: null,
  ListboxProps: null,
  loading: null,
  loadingText: null,
  noOptionsText: null,
  open: null,
  openText: null,
  size: null,
  sx: null,
  value: null
}

const statefulPropsNotForComponent = {
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


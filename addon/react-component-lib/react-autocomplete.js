import React from 'react';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ReactThemeBase } from "./base/react-theme-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactAutocomplete extends ReactThemeBase{
  constructor(props) {
    super(props);

    this.state = {
      chipProps: props.chipProps,
      classString: props.classString,
      clearText: props.clearText,
      closeText: props.closeText,
      componentsProps: props.componentsProps,
      defaultValue: props.defaultValue,
      disableClearable: props.disableClearable,
      disabled: props.disabled,
      disabledItemsFocusable: props.disabledItemsFocusable,
      filterOptions: props.filterOptions,
      filterSelectedOptions: props.filterSelectedOptions,
      forcePopupIcon: props.forcePopupIcon,
      getOptionDisabled: props.getOptionDisabled,
      groupBy: props.groupBy,
      inputValue: props.inputValue,
      listboxProps: props.listboxProps,
      loading: props.loading,
      loadingText: props.loadingText,
      noOptionsText: props.noOptionsText,
      open: props.open,
      openText: props.openText,
      options: props.options,
      size: props.size,
      sx: props.sx,
      theme: props.theme,
      value: props.value,
      //The following are used by TextField
      color: props.color,
      error: props.error,
      helperText: props.helperText,
      label: props.label,
      required: props.required,
      variant: props.variant
    };

    this.componentRef = React.createRef();

    //methods
    this.setChipProps = this.setChipProps.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setClearText = this.setClearText.bind(this);
    this.setCloseText = this.setCloseText.bind(this);
    this.setComponentsProps = this.setComponentsProps.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.setDisableClearable = this.setDisableClearable.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisabledItemsFocusable = this.setDisabledItemsFocusable.bind(this);
    this.setFilterOptions = this.setFilterOptions.bind(this);
    this.setFilterSelectedOptions = this.setFilterSelectedOptions.bind(this);
    this.setForcePopupIcon = this.setForcePopupIcon.bind(this);
    this.setGetOptionDisabled = this.setGetOptionDisabled.bind(this);
    this.setGroupBy = this.setGroupBy.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.setListboxProps = this.setListboxProps.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.setLoadingText = this.setLoadingText.bind(this);
    this.setNoOptionsText = this.setNoOptionsText.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.setOpenText = this.setOpenText.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setSx = this.setSx.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setValue = this.setValue.bind(this);
    //The following are used by TextField
    this.setColor = this.setColor.bind(this);
    this.setError = this.setError.bind(this);
    this.setHelperText = this.setHelperText.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setVariant = this.setVariant.bind(this);

    this.renderTextField = this.renderTextField.bind(this);

  }

  setChipProps(chipProps) {
    this.setState({chipProps: chipProps})
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setClearText(text) {
    this.setState( {clearText: text});
  }

  setCloseText(text) {
    this.setState( {closeText: text});
  }

  setComponentsProps(props) {
    this.setState( {componentProps: props});
  }

  setDefaultValue(defaultValue) {
    this.setState({ defaultValue: defaultValue });
  }

  setDisableClearable(disableClearable) {
    this.setState({disableClearable: disableClearable});
  }

  setDisabled(disabled) {
    this.setState({ disabled: disabled });
  }

  setDisabledItemsFocusable(disabledItemsFocusable) {
    this.setState({ disabledItemsFocusable: disabledItemsFocusable });
  }

  setFilterOptions(filterOptions) {
    this.setState( {filterOptions: filterOptions});
  }

  setFilterSelectedOptions(filterSelectedOptions) {
    this.setState( {filterSelectedOptions: filterSelectedOptions});
  }

  setForcePopupIcon(forcePopupIcon) {
    this.setState( {forcePopupIcon: forcePopupIcon});
  }

  setGetOptionDisabled(getOptionDisabled) {
    this.setState( {getOptionDisabled: getOptionDisabled});
  }

  setGroupBy(groupBy) {
    this.setState( {groupBy: groupBy});
  }

  setInputValue(inputValue) {
    this.setState( {inputValue: inputValue});
  }

  setListboxProps(listboxProps) {
    this.setState( {listboxProps: listboxProps});
  }

  setLoading(loading) {
    this.setState( {loading: loading});
  }

  setLoadingText(loadingText) {
    this.setState( {loadingText: loadingText});
  }

  setNoOptionsText(noOptionsText) {
    this.setState( {noOptionsText: noOptionsText});
  }

  setOpen(open) {
    this.setState( {open: open});
  }

  setOpenText(openText) {
    this.setState( {openText: openText});
  }

  setOptions(options) {
    this.setState( {options: options});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setSx(sx) {
    this.setState({ sx: sx});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
  }

  setValue(value) {
    this.setState({value: value});
  }

  //The following are used by TextField

  setColor(color) {
    this.setState({color: color});
  }

  setError(error) {
    this.setState({error: error});
  }

  setHelperText(helperText) {
    this.setState({helperText: helperText});
  }

  setLabel(label) {
    this.setState({label: label});
  }

  setRequired(required) {
    this.setState({required: required});
  }

  setVariant(variant) {
    this.setState({variant: variant});
  }

  renderTextField(params) {
    const {
      color,
      error,
      helperText,
      label,
      required,
      variant
    } = this.state;

    return (
      <TextField
        {...params}
        {...(color ? {color: color} : {})}
        {...(error ? {error: error} : {})}
        {...(this.props.formHelperTextProps ? {FormHelperTextProps: this.props.formHelperTextProps} : {})}
        {...(helperText ? {helperText: helperText} : {})}
        {...(this.props.inputLabelProps ? {InputLabelProps: this.props.inputLabelProps} : {})}
        {...(label ? {label: label} : {})}
        {...(required ? {required: required} : {})}
        {...(variant ? {variant: variant} : {})}
      />
    )
  }

  render() {

    /* properties not currently implemented: clearIcon, popupIcon
    */
    const {
      chipProps,
      classString,
      clearText,
      closeText,
      componentsProps,
      defaultValue,
      disableClearable,
      disabled,
      disabledItemsFocusable,
      filterOptions,
      filterSelectedOptions,
      forcePopupIcon,
      getOptionDisabled,
      groupBy,
      inputValue,
      listboxProps,
      loading,
      loadingText,
      noOptionsText,
      open,
      openText,
      options,
      size,
      sx,
      theme,
      value
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Autocomplete
          ref={this.componentRef}
          {...(options ? {options: options} : {})}
          onChange={this.props.onChange}
          {...(this.props.onClose ? {onClose: this.props.onClose} : {})}
          {...(this.props.onHighlightChange ? {onHighlightChange: this.props.onHighlightChange} : {})}
          {...(this.props.onInputChange ? {onInputChange: this.props.onInputChange} : {})}
          {...(this.props.onOpen ? {onOpen: this.props.onOpen} : {})}
          {...(this.props.autoComplete ? {autoComplete: this.props.autoComplete} : {})}
          {...(this.props.autoHighlight ? {autoHighlight: this.props.autoHighlight} : {})}
          {...(this.props.autoSelect ? {autoSelect: this.props.autoSelect} : {})}
          {...(this.props.blurOnSelect ? {blurOnSelect: this.props.blurOnSelect} : {})}
          {...(chipProps ? {ChipProps: chipProps} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.clearOnBlur ? {clearOnBlur: this.props.clearOnBlur} : {})}
          {...(this.props.clearOnEscape ? {clearOnEscape: this.props.clearOnEscape} : {})}
          {...(clearText ? {clearText: clearText} : {})}
          {...(closeText ? {closeText: closeText} : {})}
          {...(componentsProps ? {componentsProps: componentsProps} : {})}
          {...(defaultValue ? {defaultValue: defaultValue} : {})}
          {...(disableClearable ? {disableClearable: disableClearable} : {})}
          {...(this.props.disableCloseOnSelect ? {disableCloseOnSelect: this.props.disableCloseOnSelect} : {})}
          disabled={disabled}
          {...(disabledItemsFocusable ? {disabledItemsFocusable: disabledItemsFocusable} : {})}
          {...(this.props.disableListWrap ? {disableListWrap: this.props.disableListWrap} : {})}
          {...(this.props.disablePortal ? {disablePortal: this.props.disablePortal} : {})}
          {...(filterOptions ? {filterOptions: filterOptions} : {})}
          {...(filterSelectedOptions ? {filterSelectedOptions: filterSelectedOptions} : {})}
          {...(forcePopupIcon ? {forcePopupIcon: forcePopupIcon} : {})}
          {...(this.props.freeSolo ? {freeSolo: this.props.freeSolo} : {})}
          {...(this.props.getLimitTagsText ? {getLimitTagsText: this.props.getLimitTagsText} : {})}
          {...(getOptionDisabled ? {getOptionDisabled: getOptionDisabled} : {})}
          {...(this.props.getOptionLabel ? {getOptionLabel: this.props.getOptionLabel} : {})}
          {...(groupBy ? {groupBy: groupBy} : {})}
          {...(this.props.handleHomeEndKeys ? {handleHomeEndKeys: this.props.handleHomeEndKeys} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(this.props.includeInputInList ? {includeInputInList: this.props.includeInputInList} : {})}
          {...(inputValue ? {inputValue: inputValue} : {})}
          {...(this.props.isOptionEqualToValue ? {isOptionEqualToValue: this.props.isOptionEqualToValue} : {})}
          {...(this.props.limitTags ? {limitTags: this.props.limitTags} : {})}
          {...(this.props.listboxComponent ? {ListboxComponent: this.props.listboxComponent} : {})}
          {...(listboxProps ? {ListboxProps: listboxProps} : {})}
          {...(loading ? {loading: loading} : {})}
          {...(loadingText ? {loadingText: loadingText} : {})}
          {...(this.props.multiple ? {multiple: this.props.multiple} : {})}
          {...(noOptionsText ? {noOptionsText: noOptionsText} : {})}
          {...(open ? {open: open} : {})}
          {...(this.props.openOnFocus ? {openOnFocus: this.props.openOnFocus} : {})}
          {...(openText ? {openText: openText} : {})}
          {...(this.props.paperComponent ? {PaperComponent: this.props.paperComponent} : {})}
          {...(this.props.popperComponent ? {PopperComponent: this.props.popperComponent} : {})}
          {...(this.props.renderGroup ? {renderGroup: this.props.renderGroup} : {})}
          {...(this.props.renderOption ? {renderOption: this.props.renderOption} : {})}
          {...(this.props.renderTags ? {renderTags: this.props.renderTags} : {})}
          {...(this.props.selectOnFocus ? {renderTags: this.props.selectOnFocus} : {})}
          {...(size ? {size: size} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(value ? {value: value} : {value: ''})}
          renderInput={this.renderTextField}
        />
      </ReactConditionalThemeProvider>
    );
  }
}

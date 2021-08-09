import React from 'react';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactAutocomplete extends ReactBaseWithTheme{
  constructor(props) {
    super(props);

    this.state = Object.assign(this.state, {
      chipProps: props.chipProps,
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
      value: props.value,
      //The following are used by TextField
      color: props.color,
      error: props.error,
      helperText: props.helperText,
      label: props.label,
      required: props.required,
      variant: props.variant
    });

    //methods
    this.renderTextField = this.renderTextField.bind(this);

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
          {...(options ? {options: options} : {options: []})}
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
          {...(this.props.clearIcon ? {clearIcon: this.props.clearIcon} : {})}
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
          {...(this.props.popupIcon ? {popupIcon: this.props.popupIcon} : {})}
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

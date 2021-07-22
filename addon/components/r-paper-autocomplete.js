import ReactDOM from 'react-dom';
import React from 'react';
import { scheduleOnce } from "@ember/runloop";
import { action } from "@ember/object";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactAutocomplete } from "../react-component-lib/react-autocomplete";

export default class RPaperAutocompleteComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.controlType = COMPONENT_TYPES.AUTOCOMPLETE;
    this.handleClickChange = this.handleChange.bind(this);

  }

  @action
  chipProps() {
    if (this.reactRef) {
      this.reactRef.current.setChipProps(this.args.chipProps || null);
    }
  }

  @action
  clearText() {
    if (this.reactRef) {
      this.reactRef.current.setClearText(this.args.clearText || null);
    }
  }

  @action
  closeText() {
    if (this.reactRef) {
      this.reactRef.current.setCloseText(this.args.closeText || null);
    }
  }

  @action
  componentsProps() {
    if (this.reactRef) {
      this.reactRef.current.setComponentsProps(this.args.componentsProps || null);
    }
  }

  @action
  defaultValue() {
    if (this.reactRef) {
      this.reactRef.current.setDefaultValue(this.args.defaultValue || null);
    }
  }

  @action
  disableClearable() {
    if (this.reactRef) {
      this.reactRef.current.setDisableClearable(this.args.disableClearable || null);
    }
  }

  @action
  disabled() {
    if (this.reactRef) {
      this.reactRef.current.setDisabled(this.args.disabled || null);
    }
  }

  @action
  disabledItemsFocusable() {
    if (this.reactRef) {
      this.reactRef.current.setDisabledItemsFocusable(this.args.disabledItemsFocusable || null);
    }
  }

  @action
  filterOptions() {
    if (this.reactRef) {
      this.reactRef.current.setFilterOptions(this.args.filterOptions || null);
    }
  }

  @action
  filterSelectedOptions() {
    if (this.reactRef) {
      this.reactRef.current.setFilterSelectedOptions(this.args.filterSelectedOptions || null);
    }
  }

  @action
  forcePopupIcon() {
    if (this.reactRef) {
      this.reactRef.current.setForcePopupIcon(this.args.forcePopupIcon || null);
    }
  }

  @action
  getOptionDisabled() {
    if (this.reactRef) {
      this.reactRef.current.setGetOptionDisabled(this.args.getOptionDisabled || null);
    }
  }

  @action
  groupBy() {
    if (this.reactRef) {
      this.reactRef.current.setGroupBy(this.args.groupBy || null);
    }
  }

  @action
  inputValue() {
    if (this.reactRef) {
      this.reactRef.current.setInputValue(this.args.inputValue || null);
    }
  }

  @action
  listboxProps() {
    if (this.reactRef) {
      this.reactRef.current.setListboxProps(this.args.listboxProps || null);
    }
  }

  @action
  loading() {
    if (this.reactRef) {
      this.reactRef.current.setLoading(this.args.loading || null);
    }
  }

  @action
  noOptionsText() {
    if (this.loadingText) {
      this.reactRef.current.setNoOptionsText(this.args.noOptionsText || null);
    }
  }

  @action
  open() {
    if (this.reactRef) {
      this.reactRef.current.setOpen(this.args.open || null);
    }
  }

  @action
  openText() {
    if (this.reactRef) {
      this.reactRef.current.setOpenText(this.args.openText || null);
    }
  }

  @action
  options() {
    if (this.reactRef) {
      this.reactRef.current.setOptions(this.args.options || null);
    }
  }

  @action
  size() {
    if (this.reactRef) {
      this.reactRef.current.setSize(this.args.size || null);
    }
  }

  @action
  value() {
    if (this.reactRef) {
      this.reactRef.current.setValue(this.args.value || null);
    }
  }

  // The following are used by the TextField section.
  @action
  color() {
    if (this.reactRef) {
      this.reactRef.current.setColor(this.args.color || null);
    }
  }

  @action
  error() {
    if (this.reactRef) {
      this.reactRef.current.setError(this.args.error || null);
    }
  }

  @action
  helperText() {
    if (this.reactRef) {
      this.reactRef.current.setHelperText(this.args.helperText || null);
    }
  }

  @action
  label() {
    if (this.reactRef) {
      this.reactRef.current.setLabel(this.args.label || null);
    }
  }

  @action
  required() {
    if (this.reactRef) {
      this.reactRef.current.setRequired(this.args.required || null);
    }
  }

  @action
  variant() {
    if (this.reactRef) {
      this.reactRef.current.setVariant(this.args.variant || null);
    }
  }

  handleChange(event, value, reason, details) {
    if (this.args.onChange) {
      return this.args.onChange(event, value, reason, details);
    } else {
      return null;
    }
  }


  renderElement() {
    if (this.args.select && this.el.hasChildNodes()) {
      this.reactRef.current.componentRef.current.getElementsByClassName('MuiSelect-select')[0].replaceChildren(this.fragmentFromBlockContent());
    }
    super.renderElement();
  }

  @action
  inserted(element) {
    this.el = element;
    scheduleOnce('render', this, this.renderElement);

    this.reactRef = React.createRef();
    //currently does not implement inputRef

    let props = {
      options: this.args.options || null,
      onClose: this.args.onClose || null,
      onHighlightChange: this.args.onHighlightChange || null,
      onInputChange: this.args.onInputChange || null,
      onOpen: this.args.onOpen || null,
      autoComplete: this.args.autoComplete || null,
      autoHighlight: this.args.autoHighlight || null,
      autoSelect: this.args.autoSelect || null,
      blurOnSelect: this.args.blurOnSelect || null,
      chipProps: this.args.chipProps || null,
      classString: this.args.class || '',
      clearOnBlur: this.args.clearOnBlur || null,
      clearOnEscape: this.args.clearOnEscape || null,
      clearText: this.args.clearText || null,
      closeText: this.args.closeText || null,
      componentsProps: this.args.componentsProps || null,
      defaultValue: this.args.defaultValue || null,
      disableClearable: this.args.disableClearable || null,
      disableCloseOnSelect: this.args.disableCloseOnSelect || null,
      disabled: this.args.disabled || null,
      disabledItemsFocusable: this.args.disabledItemsFocusable || null,
      disableListWrap: this.args.disableListWrap || null,
      disablePortal: this.args.disablePortal || null,
      filterOptions: this.args.filterOptions || null,
      filterSelectedOptions: this.args.filterSelectedOptions || null,
      forcePopupIcon: this.args.forcePopupIcon || null,
      freeSolo: this.args.freeSolo || null,
      getLimitTagsText: this.args.getLimitTagsText || null,
      getOptionDisabled: this.args.getOptionDisabled || null,
      getOptionLabel: this.args.getOptionLabel || null,
      groupBy: this.args.groupBy || null,
      handleHomeEndKeys: this.args.handleHomeEndKeys || null,
      id: this.args.id || null,
      includeInputInList: this.args.includeInputInList || null,
      inputValue: this.args.inputValue || null,
      isOptionEqualToValue: this.args.isOptionEqualToValue || null,
      limitTags: this.args.limitTags || null,
      listboxComponent: this.args.listboxComponent ||  null,
      listboxProps: this.args.listboxProps ||  null,
      loading: this.args.loading ||  null,
      loadingText: this.args.loadingText ||  null,
      multiple: this.args.multiple ||  null,
      noOptionsText: this.args.noOptionsText ||  null,
      open: this.args.open ||  null,
      openOnFocus: this.args.openOnFocus ||  null,
      openText: this.args.openText ||  null,
      paperComponent: this.args.paperComponent ||  null,
      popperComponent: this.args.popperComponent ||  null,
      renderGroup: this.args.renderGroup ||  null,
      renderInput: this.args.renderInput ||  null,
      renderOption: this.args.renderOption ||  null,
      renderTags: this.args.renderTags ||  null,
      selectOnFocus: this.args.selectOnFocus ||  null,
      size: this.args.size || null,
      sx: this.args.sx || null,
      theme: this.themeManager.theme || null,
      value: this.args.value || null,
      ref: this.reactRef,
      onChange: this.handleClickChange,
      color: this.args.color || null,
      error: this.args.error || null,
      formHelperTextProps: this.args.formHelperTextProps || null,
      helperText: this.args.helperText || null,
      inputLabelProps: this.args.inputLabelProps || null,
      label: this.args.label || null,
      required: this.args.required || null,
      variant: this.args.variant || null
  };

    const reactPortal = ReactDOM.createPortal(<ReactAutocomplete {...props}/>, element.parentElement);

    ReactDOM.render(reactPortal, document.createElement('div'));

  }
}



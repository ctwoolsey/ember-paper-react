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
    this.componentType = COMPONENT_TYPES.AUTOCOMPLETE;
    this.handleClickChange = this.handleChange.bind(this);

  }

  handleChange(event, value, reason, details) {
    if (this.args.onChange) {
      return this.args.onChange(event, value, reason, details);
    } else {
      return null;
    }
  }

  @action
  inserted(element) {
    super.inserted(element);

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
      classString: this.initializeAndMergeClassWithClassString() || '',
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



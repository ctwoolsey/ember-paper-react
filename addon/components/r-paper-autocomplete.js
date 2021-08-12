import ReactDOM from 'react-dom';
import React from 'react';
import { action } from "@ember/object";
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from "../react-component-lib/constants/constants";
import BaseReactEmberComponent from "./base/base-react-ember";
import { ReactAutocomplete } from "../react-component-lib/react-autocomplete";
import { A } from '@ember/array';

export default class RPaperAutocompleteComponent extends BaseReactEmberComponent {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AUTOCOMPLETE;
    this.handleClickChange = this.handleChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.checkDropDownOpened = this.checkDropDownOpened.bind(this);
    this.dropDownOpened = this.dropDownOpened.bind(this);
    this.renderAdditionalItems = this.renderAdditionalItems.bind(this);
    this.hasCustomDisplay = false;
    this.existingPoppers = A();
  }

  handleChange(event, value, reason, details) {
    if (this.args.onChange) {
      return this.args.onChange(event, value, reason, details);
    } else {
      return null;
    }
  }

  renderAdditionalItems() {
    this.findAndLoadReactAttributeChildren();
    const optionsFragment = this.reactComponentFragments[REACT_ATTRIBUTE_COMPONENTS.OPTIONS];
    const headersFragment = this.reactComponentFragments[REACT_ATTRIBUTE_COMPONENTS.GROUP_HEADERS];
    if (optionsFragment || headersFragment){
      this.hasCustomDisplay = true;
    } else {
      this.hasCustomDisplay = false;
    }

    if (this.args.open) {
      this.handleOpen();
    }
  }
  renderChildren() {
    //intentionally empty
  }

  handleOpen() {
    this.setExistingPoppers();
    this.args.onOpen && this.args.onOpen(event);
    if (this.hasCustomDisplay) {
      setTimeout(this.checkDropDownOpened, 25);
    }
  }

  onOpen() {
    this.handleOpen();
  }

  setExistingPoppers() {
    const poppers = document.getElementsByClassName('MuiAutocomplete-popper');
    this.existingPoppers.clear();
    for(let i = 0; i < poppers.length; i++) {
      this.existingPoppers.pushObject(poppers[i]);
    }
  }

  checkDropDownOpened() {
    //There may be other autocompletes that have their dropdown open, so find the one that just opened.
    const poppers = document.getElementsByClassName('MuiAutocomplete-popper');
    let dropDownFound = null;
    for(let i = 0; i < poppers.length; i++) {
      let dropDown = poppers[i];
      if (!this.existingPoppers.includes(dropDown)) {
        dropDown.classList.add('ember-paper-react-hide');
        dropDownFound = dropDown;
        break;
      }
    }
    if (dropDownFound) {
      this.dropDownOpened(dropDownFound);
    } else {
      setTimeout(this.checkDropDownOpened, 25);
    }
  }

  dropDownOpened(dropDown) {
    if (this.reactComponentFragments[REACT_ATTRIBUTE_COMPONENTS.GROUP_HEADERS] && this.args.groupBy) {
      const headers = dropDown.getElementsByClassName('MuiAutocomplete-groupLabel');
      const customHeaders = this.reactComponentFragments[REACT_ATTRIBUTE_COMPONENTS.GROUP_HEADERS].children;
      for(let i = 0; i < headers.length; i++) {
        const clonedCustomHeader = customHeaders[i].cloneNode(true);
        const customFragment = document.createDocumentFragment();
        while ( clonedCustomHeader.firstChild ) {
          customFragment.appendChild(clonedCustomHeader.firstChild);
        }
        headers[i].replaceChildren(customFragment);
      }
    }

    if (this.reactComponentFragments[REACT_ATTRIBUTE_COMPONENTS.OPTIONS]) {
      const customDropDownListItems = this.reactComponentFragments[REACT_ATTRIBUTE_COMPONENTS.OPTIONS].children;
      if (this.args.groupBy) {
        let optionCounter = 0;
        const optionGroups = dropDown.getElementsByClassName('MuiAutocomplete-groupUl');
        for(let ogIndex = 0; ogIndex < optionGroups.length; ogIndex++) {
          const dropDownListItems = optionGroups[ogIndex].children;
          for(let i = 0; i < dropDownListItems.length; i++) {
            const clonedCustomDropDownListItem = customDropDownListItems[optionCounter].cloneNode(true);
            const customFragment = document.createDocumentFragment();
            while ( clonedCustomDropDownListItem.firstChild ) {
              customFragment.appendChild(clonedCustomDropDownListItem.firstChild);
            }
            dropDownListItems[i].replaceChildren(customFragment);
            optionCounter++;
          }
        }
      } else {
        //Since no grouping the dropdown structure is organized differently for only option display
        const dropDownListItems = dropDown.getElementsByTagName("LI");
        for(let i = 0; i < dropDownListItems.length; i++) {
          const clonedCustomDropDownListItem = customDropDownListItems[i].cloneNode(true);
          const customFragment = document.createDocumentFragment();
          while ( clonedCustomDropDownListItem.firstChild ) {
            customFragment.appendChild(clonedCustomDropDownListItem.firstChild);
          }
          dropDownListItems[i].replaceChildren(customFragment);
        }
      }
    }

    dropDown.classList.remove('ember-paper-react-hide');
  }

  onInputChange(event, value, reason) {

    this.args.onInputChange && this.args.onInputChange(event, value, reason);
  }

  @action
  inserted(element) {
    super.inserted(element);

    //currently does not implement inputRef
    let props = {
      options: this.args.options || null,
      onClose: this.args.onClose || null,
      onHighlightChange: this.args.onHighlightChange || null,
      onInputChange: this.onInputChange,
      onOpen: this.onOpen,
      autoComplete: this.args.autoComplete || null,
      autoHighlight: this.args.autoHighlight || null,
      autoSelect: this.args.autoSelect || null,
      blurOnSelect: this.args.blurOnSelect || null,
      chipProps: this.args.chipProps || null,
      classString: this.initializeAndMergeClassWithClassString() || '',
      clearIcon: this.createIcon(this.args.clearIcon, this.args.clearIconProps),
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
      id: this.findElementId(),
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
      popupIcon: this.createIcon(this.args.popupIcon, this.args.popupIconProps),
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



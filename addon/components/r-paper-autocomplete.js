import React from 'react';
import {  PAPER_REACT_HIDDEN_CLASS } from '../constants/constants';
import { AUTOCOMPLETE } from "../constants/autocomplete";
import { ReactAutocomplete } from '../react-component-lib/react-autocomplete';
import { A } from '@ember/array';
import { action } from '@ember/object';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { AutocompletePropObj } from '../prop-files/autocomplete-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";
import { usesErrorValidation } from '../decorators/uses-error-validation';

@usesErrorValidation
@hasAttributeNodeChildren
export default class RPaperAutocompleteComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = AUTOCOMPLETE.COMPONENT_TYPE;
    this.loadPropObject(TextFieldPropObj, AutocompletePropObj);
    this.reactElement = ReactAutocomplete;

    this.existingPoppers = A();

    this.inputRef = React.createRef();
    this.dropDownObserver = null;
    this.optionsObserver = null;
    this.headersObserver = null;
    this.optionsFragment = null;
    this.headersFragment = null;
    this.dropDownElement = null;

    if (this.args.open) {
      setTimeout(this.onCheckIfDropDownOpened, 25);
    }
  }

  get groupHeaders() {
    return AUTOCOMPLETE.ATTRIBUTE_COMPONENT.GROUP_HEADERS;
  }

  get options() {
    return AUTOCOMPLETE.ATTRIBUTE_COMPONENT.OPTIONS;
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.onOpen = this.onOpenHandler;
    this.propsToPass.onClose = this.onCloseHandler;
    if (!this.propsToPass.options) {
      this.propsToPass.options = [];
    }
    this.propsToPass.inputRef = this.inputRef;
    if (this.args.readOnly) {
      if (this.propsToPass.inputProps === null) {
        this.propsToPass.inputProps = {};
      }
      this.propsToPass.inputProps.readOnly = true;
    }

    if (this.args.onChange) {
      this.propsToPass.onChange = this.onChangeHandler;
    }
  }

  onRenderAttributeNodeChildren() {
    this.optionsFragment = this.getAttributeFragment(AUTOCOMPLETE.ATTRIBUTE_COMPONENT.OPTIONS);
    this.headersFragment = this.getAttributeFragment(AUTOCOMPLETE.ATTRIBUTE_COMPONENT.GROUP_HEADERS);

    if (this.optionsFragment) {
      this.optionsObserver = this.createObserver(this.optionsFragment);
    }

    if (this.headersFragment) {
      this.headersObserver = this.createObserver(this.headersFragment);
    }
  }

  createObserver(elementToObserve) {
    const config = { attributes: false, childList: true, subtree: true };
    let observer = new MutationObserver(this.onDropDownOpened);
    // Start observing the target node for configured mutations
    observer.observe(elementToObserve, config);
    return observer;
  }

  @action
  onChangeHandler(event, value, reason, details) {
    if (this.args.onChange) {
      if (this.args.nativeOnChange) {
        return this.args.onChange(event, value, reason, details);
      } else {
        return this.args.onChange(value);
      }
    } else {
      return null;
    }
  }

  @action
  onCloseHandler(event, reason) {
    this.dropDownObserver && this.dropDownObserver.disconnect();
    this.args.onClose && this.args.onClose(event, reason);
  }

  @action
  onOpenHandler(event) {
    this.args.onOpen && this.args.onOpen(event);
    if (this.optionsFragment || this.headersFragment || this.args.popupClass) {
      setTimeout(this.onCheckIfDropDownOpened, 25);
    }
  }

  findDropDownElement() {
    let dropDownElement = null;
    const reactElement = this.reactRef.current.componentRef.current;
    if (reactElement.getAttribute('aria-expanded')) {
      const dropDownId = reactElement.getAttribute('aria-owns');
      if (dropDownId) {
        const dropDownListBox = document.getElementById(dropDownId);
        if (dropDownListBox) {
          dropDownElement = dropDownListBox.closest('[role="presentation"]')
          if (this.args.popupClass) {
            dropDownElement.classList.add(this.args.popupClass);
          }
        }
      }
    }

    return dropDownElement;
  }

  @action
  onCheckIfDropDownOpened() {
    //There may be other autocompletes that have their dropdown open, so find the one that just opened.
    this.dropDownElement = this.findDropDownElement();
    if (this.dropDownElement) {
      if (this.optionsFragment || this.headersFragment) {
        this.dropDownObserver = this.createObserver(this.dropDownElement);
        this.onDropDownOpened();
      }
    } else {
      setTimeout(this.onCheckIfDropDownOpened, 25);
    }
  }

  get totalDropdownGroupedChildren() {
    let totalChildren = null;
    if (this.dropDownElement) {
      const optionGroups = this.dropDownElement.getElementsByClassName(AUTOCOMPLETE.GROUPED_GROUP_HOLDER);
      for(let ogIndex = 0; ogIndex < optionGroups.length; ogIndex++) {
        totalChildren += optionGroups[ogIndex].children.length;
      }
    }
    return totalChildren;
  }

  @action
  onDropDownOpened() {
    if (this.dropDownElement &&

      ((this.args.groupBy && (this.headersFragment?.children.length === this.dropDownElement.getElementsByClassName(AUTOCOMPLETE.GROUP_LABEL).length))  ||

      (this.args.groupBy && !this.headersFragment && (this.optionsFragment?.children.length === this.dropDownOptionListCountForGrouped())) ||

      (!this.args.groupBy && (this.optionsFragment?.children.length === this.dropDownElement.getElementsByTagName(AUTOCOMPLETE.DROP_DOWN_ITEM_TAG_NAME).length)))) {

      this.dropDownObserver && this.dropDownObserver.disconnect();
      this.loadCustomDropDownItems();
      this.dropDownObserver = this.createObserver(this.dropDownElement);
    }
  }

  dropDownOptionListCountForGrouped() {
    let optionCounter = 0;
    const optionGroups = this.dropDownElement?.getElementsByClassName(AUTOCOMPLETE.GROUPED_GROUP_HOLDER);
    if (optionGroups) {
      for(let ogIndex = 0; ogIndex < optionGroups.length; ogIndex++) {
        const dropDownListItems = optionGroups[ogIndex].children;
        for(let i = 0; i < dropDownListItems.length; i++) {
          optionCounter++;
        }
      }
    }
    return optionCounter;
  }

  loadCustomDropDownItems() {
    if (this.args.groupBy && this.headersFragment?.children.length) {
      const headers = this.dropDownElement.getElementsByClassName(AUTOCOMPLETE.GROUP_LABEL);
      const customHeaders = this.headersFragment.children;
      for(let i = 0; i < headers.length; i++) {
        const clonedCustomHeader = customHeaders[i].cloneNode(true);
        const customFragment = document.createDocumentFragment();
        while ( clonedCustomHeader.firstChild ) {
          customFragment.appendChild(clonedCustomHeader.firstChild);
        }
        headers[i].replaceChildren(customFragment);
      }
    }

    if (this.optionsFragment?.children.length) {
      const customDropDownListItems = this.optionsFragment.children;
      if (this.args.groupBy) {
        let optionCounter = 0;
        const optionGroups = this.dropDownElement.getElementsByClassName(AUTOCOMPLETE.GROUPED_GROUP_HOLDER);
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
        const dropDownListItems = this.dropDownElement.getElementsByTagName(AUTOCOMPLETE.DROP_DOWN_ITEM_TAG_NAME);
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

    this.dropDownElement.classList.remove(PAPER_REACT_HIDDEN_CLASS);
  }

  willDestroy() {
    this.optionsObserver && this.optionsObserver.disconnect();
    this.headersObserver && this.headersObserver.disconnect();
    super.willDestroy();
  }

}



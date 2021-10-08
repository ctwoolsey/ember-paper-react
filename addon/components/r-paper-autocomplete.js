import React from 'react';
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from '../react-component-lib/constants/constants';
import { ReactAutocomplete } from '../react-component-lib/react-autocomplete';
import { A } from '@ember/array';
import { action } from '@ember/object';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { AutocompletePropObj } from '../prop-files/autocomplete-props';
import { TextFieldPropObj } from '../prop-files/text-field-props';
import { hasAttributeNodeChildren } from "../decorators/has-attribute-node-children";

@hasAttributeNodeChildren
export default class RPaperAutocompleteComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AUTOCOMPLETE;
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
  }

  initializeProps() {
    super.initializeProps();
    this.propsToPass.onOpen = this.onOpenHandler;
    this.propsToPass.onClose = this.onCloseHandler;
    if (!this.propsToPass.options) {
      this.propsToPass.options = [];
    }
    this.propsToPass.inputRef = this.inputRef;
  }

  onRenderAttributeNodeChildren() {
    this.optionsFragment = this.getAttributeFragment(REACT_ATTRIBUTE_COMPONENTS.OPTIONS);
    this.headersFragment = this.getAttributeFragment(REACT_ATTRIBUTE_COMPONENTS.GROUP_HEADERS);

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
  onCloseHandler(event, reason) {
    this.dropDownObserver && this.dropDownObserver.disconnect();
    this.args.onClose && this.args.onClose(event, reason);
  }

  setExistingPoppers() {
    const poppers = document.getElementsByClassName('MuiAutocomplete-popper');
    this.existingPoppers.clear();
    for(let i = 0; i < poppers.length; i++) {
      this.existingPoppers.pushObject(poppers[i]);
    }
  }

  @action
  onOpenHandler(event) {
    this.args.onOpen && this.args.onOpen(event);
    if (this.optionsFragment) {
      this.setExistingPoppers();
      setTimeout(this.onCheckIfDropDownOpened, 25);
    }
  }

  findDropDownElement() {
    const poppers = document.getElementsByClassName('MuiAutocomplete-popper');
    let dropDownElement = null;
    for(let i = 0; i < poppers.length; i++) {
      let dropDown = poppers[i];
      if (!this.existingPoppers.includes(dropDown)) {
        dropDown.classList.add('ember-paper-react-hide');
        dropDownElement = dropDown;

        break;
      }
    }
    return dropDownElement;
  }

  @action
  onCheckIfDropDownOpened() {
    //There may be other autocompletes that have their dropdown open, so find the one that just opened.
    this.dropDownElement = this.findDropDownElement();
    if (this.dropDownElement) {
      this.dropDownObserver = this.createObserver(this.dropDownElement);
      this.onDropDownOpened();
    } else {
      setTimeout(this.onCheckIfDropDownOpened, 25);
    }
  }

  get totalDropdownGroupedChildren() {
    let totalChildren = null;
    if (this.dropDownElement) {
      const optionGroups = this.dropDownElement.getElementsByClassName('MuiAutocomplete-groupUl');
      for(let ogIndex = 0; ogIndex < optionGroups.length; ogIndex++) {
        totalChildren += optionGroups[ogIndex].children.length;
      }
    }
    return totalChildren;
  }

  @action
  onDropDownOpened() {
    if ((this.args.groupBy && (this.headersFragment?.children.length === this.dropDownElement?.getElementsByClassName('MuiAutocomplete-groupLabel').length) &&
        (this.optionsFragment?.children.length === this.totalDropdownGroupedChildren)) ||
      (!this.args.groupBy && (this.optionsFragment?.children.length === this.dropDownElement?.getElementsByTagName('LI').length))) {

      this.dropDownObserver.disconnect();
      this.loadCustomDropDownItems();
      this.dropDownObserver = this.createObserver(this.dropDownElement);
    }
  }

  loadCustomDropDownItems() {
    if (this.args.groupBy && this.headersFragment?.children.length) {
      const headers = this.dropDownElement.getElementsByClassName('MuiAutocomplete-groupLabel');
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
        const optionGroups = this.dropDownElement.getElementsByClassName('MuiAutocomplete-groupUl');
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
        const dropDownListItems = this.dropDownElement.getElementsByTagName('LI');
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

    this.dropDownElement.classList.remove('ember-paper-react-hide');
  }

  willDestroy() {
    this.optionsObserver && this.optionsObserver.disconnect();
    this.headersObserver && this.headersObserver.disconnect();
    super.willDestroy();
  }

}



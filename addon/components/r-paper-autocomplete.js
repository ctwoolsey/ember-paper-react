import React from 'react';
import { COMPONENT_TYPES, REACT_ATTRIBUTE_COMPONENTS } from '../react-component-lib/constants/constants';
import { ReactAutocomplete } from '../react-component-lib/react-autocomplete';
import { A } from '@ember/array';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { AutocompletePropObj } from '../react-component-lib/utility/props/autocomplete-props';
import { TextFieldPropObj } from '../react-component-lib/utility/props/text-field-props';

export default class RPaperAutocompleteComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.AUTOCOMPLETE;
    this.props = Object.assign({}, TextFieldPropObj.props(), AutocompletePropObj.props());
    this.stateProps = Object.assign({}, TextFieldPropObj.stateProps(), AutocompletePropObj.stateProps());
    this.notForComponentProps = Object.assign({}, TextFieldPropObj.propsNotForComponent(), AutocompletePropObj.propsNotForComponent());
    this.notForComponentStateProps = Object.assign({}, TextFieldPropObj.statefulPropsNotForComponent(), AutocompletePropObj.statefulPropsNotForComponent());
    this.reactElement = ReactAutocomplete;

    this.onOpenHandler = this.onOpenHandler.bind(this);
    this.checkDropDownOpened = this.checkDropDownOpened.bind(this);
    this.dropDownOpened = this.dropDownOpened.bind(this);
    this.renderAdditionalItems = this.renderAdditionalItems.bind(this);
    this.hasCustomDisplay = false;
    this.existingPoppers = A();

    this.inputRef = React.createRef();
  }

  initializeProps() {
    super.initializeProps();
    this.props.onOpen = this.onOpenHandler;
    this.props.clearIcon = this.createIcon(this.args.clearIcon);
    this.props.popupIcon = this.createIcon(this.args.popupIcon);
    if (!this.props.options) {
      this.props.options = [];
    }
    this.props.inputRef = this.inputRef;
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
      this.onOpenHandler();
    }
  }
  renderChildren() {
    //intentionally empty
  }

  onOpenHandler() {
    this.setExistingPoppers();
    this.args.onOpen && this.args.onOpen(event);
    if (this.hasCustomDisplay) {
      setTimeout(this.checkDropDownOpened, 25);
    }
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
        const dropDownListItems = dropDown.getElementsByTagName('LI');
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

}



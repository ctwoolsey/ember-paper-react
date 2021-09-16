import { ReactCheckbox } from '../../react-component-lib/react-checkbox';
import { ReactRadio } from '../../react-component-lib/react-radio';
import { ReactSwitch } from '../../react-component-lib/react-switch';
import ReactDOM from 'react-dom';
import React from 'react';
import { action } from '@ember/object';
import { COMPONENT_TYPES } from '../../react-component-lib/constants/constants';
import BaseReactEmberComponent from './base-react-ember';


/* Currently does not handle passing inputProps or use inputRef */

export default class BaseLabeledCheckRadioSwitchComponent extends BaseReactEmberComponent {
  constructor() {
    super(...arguments);
  }

  @action
  inserted(element) {
    super.inserted(element);

    let props = {
      checked: this.args.checked || false,
      classString: this.initializeAndMergeClassWithClassString() || '',
      color: this.args.color || null,
      disabled: this.args.disabled || false,
      disableRipple: this.args.disableRipple || null,
      edge: this.args.edge || false, //used by switch
      indeterminate: this.args.indeterminate || false, //used by checkbox
      label: this.args.label || null,
      labelPlacement: this.args.labelPlacement || 'end',
      name: this.args.radioName || this.nameValue || this.args.name,  //used by radio
      size: this.args.size || null,
      sx: this.args.size || null,
      theme: this.themeManager.theme || null,
      value: this.args.value || '',
      ref: this.reactRef,
      onChange: this.handleClickChange,
      id: this.findElementId()
    };

    let ControlComponent;
    switch(this.componentType) {
      case COMPONENT_TYPES.CHECKBOX:
        ControlComponent = ReactCheckbox;
        delete props.edge;
        break;
      case COMPONENT_TYPES.RADIO:
        ControlComponent = ReactRadio;
        delete props.edge;
        delete props.indeterminate;
        break;
      case COMPONENT_TYPES.SWITCH:
        ControlComponent = ReactSwitch;
        delete props.indeterminate;
        break;
    }

    const reactPortal = ReactDOM.createPortal(<ControlComponent {...props}/>, element.parentElement);
    ReactDOM.render(reactPortal, document.createElement('div'));
  }
}

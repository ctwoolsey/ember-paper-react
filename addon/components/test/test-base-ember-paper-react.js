//import { COMPONENT_TYPES } from '../constants/constants';
import BaseEmberPaperReact from '../base/base-ember-paper-react';
import { inject as service } from '@ember/service';
import { TestPropObj } from "../../prop-files/test/test-props";
/*
import { FormControlLabelPropObj } from '../prop-files/form-control-label-props';
import { ReactCheckbox } from '../react-component-lib/react-checkbox';*/

export default class TestBaseEmberPaperReact extends BaseEmberPaperReact {
  @service('test/component-reference') componentReference;

  constructor() {
    super(...arguments);
    this.componentReference.load(this);
    this.loadPropObject(TestPropObj);
  /*  this.componentType = COMPONENT_TYPES.CHECKBOX;
    this.loadPropObject(CheckboxPropObj, FormControlLabelPropObj);
    this.reactElement = ReactCheckbox;*/
  }

  inserted() {
    console.log('INSERTED*************');
  }
}

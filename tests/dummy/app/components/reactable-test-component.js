import { ModifierPropObj } from 'dummy/prop-files/modifier-props';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';

export default class RPaperComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.args.setReference(this);
    this.loadPropObject(ModifierPropObj);
    this.wasInserted = false;
    this.stateChanged = null;
    this.stateValue = null;

    this.changeReactState = this.changeReactState.bind(this);
    this.resetStateChecker = this.resetStateChecker.bind(this);
  }

  createReactComponent() {
    this.wasInserted = true;
  }

  changeReactState(propName, value)   {
    this.stateChanged = propName;
    this.stateValue = value;
  }

  resetStateChecker() {
    this.stateChanged = null;
    this.stateValue = null;
  }
}

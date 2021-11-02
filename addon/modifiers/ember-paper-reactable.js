import Modifier from 'ember-modifier';
import { A } from '@ember/array';

export default class EmberPaperReactableModifier extends Modifier {
  /* usage {{ember-paper-reactable this.inserted this.changeReactState this.changeArgs}} */

  constructor(owner, args) {
    super(...arguments);
    this.insertedFn = this.args.positional[0];
    this.changeReactStateFn = this.args.positional[1];
    this.initializeState();
  }

  initializeState(){
    this.state = A();
    const argValues = this.args.positional[2];
    for (let propName in argValues) {
      if (Object.prototype.hasOwnProperty.call(argValues, propName)) {
        this.state.pushObject({propName: propName, value: argValues[propName]});
      }
    }
  }

  getChangedStateObject() {
    const argValues = this.args.positional[2];
    return this.state.find((stateObj) => {
      return stateObj.value !== argValues[stateObj.propName];
    });
  }

  updateState(stateToChange) {
    const argValues = this.args.positional[2];
    stateToChange.value = argValues[stateToChange.propName];
  }

  didInstall() {
    super.didInstall();
    this.insertedFn && this.insertedFn(this.element);
  }

  didUpdateArguments() {
    super.didUpdateArguments();
    const changedStateObj = this.getChangedStateObject();
    if (changedStateObj) {
      this.updateState(changedStateObj);
      this.changeReactStateFn && this.changeReactStateFn(changedStateObj.propName, changedStateObj.value);
    }
  }
}

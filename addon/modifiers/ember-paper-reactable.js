import Modifier from 'ember-modifier';
import { A } from '@ember/array';

export default class EmberPaperReactableModifier extends Modifier {
  /* usage {{ember-paper-reactable this.inserted this.changeReactState this.changeArgs}} */

  constructor(owner, args) {
    super(...arguments);
    this.initializeState();
    //add this.argValues etc
    console.log('in modifier constructor');
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
    stateToChange.value = this.args.positional[2][stateToChange.propName];
  }

  didInstall() {
    super.didInstall();
    this.args.positional[0] && this.args.positional[0](this.element);
    console.log('in did install');
  }

  didUpdateArguments() {
    super.didUpdateArguments();
    let changedStateObj = this.getChangedStateObject();
    if (changedStateObj) {
      this.updateState(changedStateObj);
      this.args.positional[1](changedStateObj.propName, changedStateObj.value);
      console.log('Changed (' + changedStateObj.propName+')');
    }

    //changing object works fine until a not object value is changed.  Unless a direct console log is used.??????
    //for somereason calling this allows the method to update the next time. Maybe reading this does something.
    //What happens if I comment out style?  Problem goes away when explicitly called.  Maybe the problem is with objects vs strings.
    //   console.log('SX: ' + this.args.positional[3].sx);
    //console.log('Changed Value: ' + this.args.positional[3][changedStateObj.propName]);
    //console.log('Changed Value: ' + this.args.positional[2][changedStateObj.propName][changedStateObj.propName]);
    //   console.log('Style: ' + this.args.positional[3].style);
    //console.log('Variant: ' + this.args.positional[3].variant);
    //console.log('arguments updated');
  }

  willDestroy() {
    super.willDestroy();
  }
}

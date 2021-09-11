import Modifier from 'ember-modifier';
import { A } from '@ember/array';

export default class EmberPaperReactableModifier extends Modifier {
  /* usage {{ember-paper-reactable this.inserted this.changeReactState this.argMonitor this.args}} */
  constructor(owner, args) {
    super(...arguments);
    this.initializeState();
    console.log('in modifier constructor');
  }

  initializeState(){
    this.state = A();
    const argMonitor = this.args.positional[2];
    const argValues = this.args.positional[3];
    for (let propName in argMonitor) {
      if (Object.prototype.hasOwnProperty.call(argMonitor, propName)) {
        this.state.pushObject({propName: propName, value: argValues[propName]});
      }
    }
  }

  getChangedStateObject() {
    const argMonitor = this.args.positional[2];
    const argValues = this.args.positional[3];
    return this.state.find((stateObj) => {
      let a = 1;
      return stateObj.value !== argValues[stateObj.propName];
    });
      //return argMonitor[argObj.propName][argObj.propName] !== argObj['value'][argObj.propName]});
  }

  updateState(stateToChange) {
    stateToChange.value = this.args.positional[3][stateToChange.propName];
    const argMonitor = this.args.positional[2];
    argMonitor[stateToChange.propName] = this.args.positional[3];
    let a = 1;
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
      //this.args.positional[1](changedStateObj.propName, changedStateObj.value);
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

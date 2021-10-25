import Service from '@ember/service';

export default class ReactComponentHolderService extends Service {
  constructor() {
    super();
    this.reactComponents = {};
  }

  add(id, reactComponent) {
    this.reactComponents[id] = reactComponent;
  }

  load(id) {
    //possibly delete here?? or remove object
    return this.reactComponents[id];
  }
}

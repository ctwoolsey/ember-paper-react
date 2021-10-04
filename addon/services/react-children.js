import Service from '@ember/service';
import { A } from '@ember/array';

export default class ReactChildrenService extends Service {
  constructor() {
    super();
    this.queues = {};
    this.onChildChanged = {};
  }

  create(parentIdentifier, onChildChanged) {
    this.queues[parentIdentifier] = A();
    this.onChildChanged[parentIdentifier] = onChildChanged;
  }

  save(parentIdentifier, ReactChild){
    this.queues[parentIdentifier].pushObject(ReactChild);
    this.onChildChanged[parentIdentifier]();
  }

  delete(parentIdentifier, ReactChild) {
    if (Object.prototype.hasOwnProperty.call(this.queues, parentIdentifier)) {
      this.queues[parentIdentifier].removeObject(ReactChild);
      this.onChildChanged[parentIdentifier]();
    }
  }

  load(parentIdentifier) {
    return this.queues[parentIdentifier];
  }

  destroyReactChildren(parentIdentifier) {
    this.queues[parentIdentifier].clear();
    delete this.queues[parentIdentifier];
    delete this.onChildChanged[parentIdentifier];
  }
}

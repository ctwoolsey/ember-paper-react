import Service from '@ember/service';
import { A } from '@ember/array';

export default class ReactChildrenService extends Service {
  constructor() {
    super();
    this.queues = {};
    this.onChildAdded = {};
  }

  create(parentIdentifier, onChildAdded) {
    this.queues[parentIdentifier] = [];
    this.onChildAdded[parentIdentifier] = onChildAdded;
  }

  save(parentIdentifier, ReactChild){
    this.queues[parentIdentifier].push(ReactChild);
    this.onChildAdded[parentIdentifier]();
  }

  load(parentIdentifier) {
    //return this.queue.shiftObject();
    return this.queues[parentIdentifier];
  }
}

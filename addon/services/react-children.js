import Service from '@ember/service';
import { A } from '@ember/array';

export default class ReactChildrenService extends Service {
  constructor() {
    super();
    this.queues = {};
    this.onChildChanged = {};
    this.childrenRenderMethods = {};
  }

  create(parentIdentifier, onChildChanged) {
    this.queues[parentIdentifier] = A();
    this.onChildChanged[parentIdentifier] = onChildChanged;
    this.childrenRenderMethods[parentIdentifier] = A();
  }

  save(parentIdentifier, ReactChild, onRenderReady){
    this.queues[parentIdentifier].pushObject(ReactChild);
    this.onChildChanged[parentIdentifier]();
    this.childrenRenderMethods[parentIdentifier].pushObject(onRenderReady);
  }

  delete(parentIdentifier, ReactChild) {
    if (Object.prototype.hasOwnProperty.call(this.queues, parentIdentifier)) {
      this.queues[parentIdentifier].removeObject(ReactChild);
      this.onChildChanged[parentIdentifier]();
    }
  }

  render(parentIdentifier) {
    this.childrenRenderMethods[parentIdentifier].forEach((renderMethod) => {
      renderMethod();
    });
  }

  load(parentIdentifier) {
    return this.queues[parentIdentifier];
  }

  destroyReactChildren(parentIdentifier) {
    this.queues[parentIdentifier].clear();
    delete this.queues[parentIdentifier];
    delete this.onChildChanged[parentIdentifier];
    this.childrenRenderMethods[parentIdentifier].clear();
    delete this.childrenRenderMethods[parentIdentifier];
  }
}

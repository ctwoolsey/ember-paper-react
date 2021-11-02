import Service from '@ember/service';
import { A } from '@ember/array';

export default class ReactChildrenService extends Service {
  constructor() {
    super();
    this.queues = {};
    this.onChildChanged = {};
    this.childrenRenderMethods = {};
  }

  create(groupIdentifier, onChildChanged) {
    this.queues[groupIdentifier] = A();
    this.onChildChanged[groupIdentifier] = onChildChanged;
    this.childrenRenderMethods[groupIdentifier] = A();
  }

  save(groupIdentifier, ReactChild, onRenderReady){
    this.queues[groupIdentifier].pushObject(ReactChild);
    this.onChildChanged[groupIdentifier]();
    this.childrenRenderMethods[groupIdentifier].pushObject(onRenderReady);
  }

  delete(groupIdentifier, ReactChild) {
    if (Object.prototype.hasOwnProperty.call(this.queues, groupIdentifier)) {
      this.queues[groupIdentifier].removeObject(ReactChild);
      this.onChildChanged[groupIdentifier]();
    }
  }

  render(groupIdentifier) {
    this.childrenRenderMethods[groupIdentifier].forEach((renderMethod) => {
      renderMethod();
    });
  }

  load(groupIdentifier) {
    return this.queues[groupIdentifier];
  }

  destroyReactChildren(groupIdentifier) {
    this.queues[groupIdentifier].clear();
    delete this.queues[groupIdentifier];
    delete this.onChildChanged[groupIdentifier];
    this.childrenRenderMethods[groupIdentifier].clear();
    delete this.childrenRenderMethods[groupIdentifier];
  }
}

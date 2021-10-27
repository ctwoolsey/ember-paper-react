import Service from '@ember/service';
import { A } from '@ember/array';

export default class ReactGroupListService extends Service {
  constructor() {
    super();
    this.list = {};
  }

  create(groupIdentifier) {
    this.list[groupIdentifier] = A();
  }

  save(groupIdentifier, key, displayNode) {

    if (Object.prototype.hasOwnProperty.call(this.list,groupIdentifier)) {
      if (key === undefined) {
        key = '';
      }
      this.list[groupIdentifier].pushObject({ key: key, node: displayNode });
    }
  }

  load(groupIdentifier, key) {
    if (key === undefined) {
      key = '';
    }
    return this.list[groupIdentifier].findBy('key', key);
  }
}

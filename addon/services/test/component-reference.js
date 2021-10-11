import Service from '@ember/service';

export default class ComponentReferenceService extends Service {
  constructor() {
    super();
    this.component = null;
  }

  load(reference) {
    this.component = reference;
  }

}

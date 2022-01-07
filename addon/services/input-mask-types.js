import Service from '@ember/service';

export default class InputMaskTypesService extends Service {
  constructor() {
    super();
    this.iMaskTypes = {};
    this.numberFormatTypes = {};
  }

  addIMaskType(identifier, maskObject) {
    this.iMaskTypes[identifier] = maskObject;
  }

  addNumberFormatType(identifier, maskObject) {
    this.numberFormatTypes[identifier] = maskObject;
  }

  getIMaskType(identifier) {
    if (this.iMaskTypes[identifier]) {
      return this.iMaskTypes[identifier];
    } else {
      return {};
    }
  }

  getNumberFormatType(identifier) {
    if (this.numberFormatTypes[identifier]) {
      return this.numberFormatTypes[identifier];
    } else {
      return {};
    }
  }
}
